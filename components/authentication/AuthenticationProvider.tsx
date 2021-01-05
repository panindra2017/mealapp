import React, { useState } from 'react'
import { useCookies } from "react-cookie"
import { useEffect } from 'react';
import _ from 'lodash'
import { UserData } from '../../data/UserSubscriptionData';
import { useRouter } from 'next/dist/client/router';
export const AuthenticationContext = React.createContext({} as any);
const AuthenticationProvider = ({ children }: any) => {
    const [cookies, setCookie] = useCookies(['user'])
    const router = useRouter();
    const [user, setUser] = useState<any>(null)
    const [isSingIn, setisSingIn] = useState(false)
    useEffect(() => {
        if (cookies.user !== null) {
            setUser(cookies.user)
            setisSingIn(true)
            router.push(`/`)
        }
        else {
            setisSingIn(false)
        }
    }, [cookies.user])
    function signIn() {
        setCookie('user', UserData, { path: '/' });
    }
    function signOut() {
        setCookie('user', null, { path: '/' });
        router.push(`/`)
    }
    return (
        <div>
            <AuthenticationContext.Provider value={{ user, isSingIn, signIn, signOut }}>
                {children}
            </AuthenticationContext.Provider>
        </div>
    )
}

export default AuthenticationProvider
