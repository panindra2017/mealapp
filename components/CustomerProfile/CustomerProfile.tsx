import React from 'react'

interface Props {

}

const CustomerProfile = () => {
    return (
        <div className="flex flex-col ">
            <div className='flex items-center shadow-lg px-4'>



                <div className="flex-1 text-base py-4">Hi, Arun Kumar</div>
                <div><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg></div>
            </div>
            <div className='flex my-4 px-2 py-4'>



                <div className='flex-1 '>
                    <div className='flex my-2 px-4 py-1 font-bold'> Meal Plan :    </div>
                    <div className='flex   px-4 py-1'>  Veg South Indian</div>

                </div>
                <div className='flex-1 '>
                <div className='flex my-2 px-4 py-1 font-bold'> Subscription :    </div>
                    <div className='flex   px-4 py-1'>  Weekly</div>

                </div>
            </div>

        </div>
    )
}

export default CustomerProfile
