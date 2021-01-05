import React from 'react'
import { UserData } from '../../data/UserSubscriptionData'


const CustomerProfile = () => {

    const user = UserData;
    return (
        <div className="flex flex-col ">
            <div className='flex items-center shadow-lg px-4'>

                <div className="flex-1 text-base py-4 px-4">Hi, <b>{user.profileName}</b></div>
                <div> </div>
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
