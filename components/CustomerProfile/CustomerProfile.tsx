import { useRouter } from 'next/dist/client/router';
import React, { useContext, useEffect } from 'react'
import { UserData } from '../../data/UserSubscriptionData'
import { AuthenticationContext } from '../authentication/AuthenticationProvider';
import LogoutSvg from '../common/svgs/Logout';


const CustomerProfile = ({ user }: any) => {

    const { isSingIn, signIn,signOut} = useContext(AuthenticationContext)
    useEffect(() => {

    }, [user])

    if (!user) {

        return <div></div>
    }
    return (
        <div className="flex flex-col ">
            <div className='flex items-center shadow-lg px-4'>

                <div className="flex-1 text-base py-4 px-4">Hi, <b>{user.profileName}</b></div>
                <div> {isSingIn ? <div className="cursor-pointer px-2" onClick={(e:any)=>{signOut}}><LogoutSvg stroke="#597e8d" /></div> : ""} </div>
            </div>
            <div className='flex my-4 px-2 py-4 border-b'>
                <div className='flex-1 '>
                    <div className='flex my-2 px-4 py-1 font-bold'> Meal Plan</div>
                    <div className='flex   px-4 py-1 text-base'>  Veg South Indian</div>
                </div>
                <div className='flex-1 '>
                    <div className='flex my-2 px-4 py-1 font-bold'> Subscription</div>
                    <div className='flex   px-4 py-1'>  Weekly</div>

                </div>
            </div>



        </div>
    )
}

export default CustomerProfile
