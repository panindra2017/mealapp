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
    const [user, setUser] = useState<any>()
    const [isSingIn, setisSingIn] = useState(false)

    useEffect(() => {
        setUser(cookies.user)
    }, [])
    useEffect(() => {
        if (cookies.user !== null) {
            setisSingIn(true)
            setUser(cookies.user)
        }
        else {
            setisSingIn(false)
        }
    }, [cookies.user])
    function signIn() {
        console.log("singin")
        setCookie('user', UserData, { path: '/' });
    }
    function signOut() {
        setCookie('user', undefined, { path: '/' });
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
