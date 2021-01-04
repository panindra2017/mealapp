import React from 'react'
import Link from 'next/link'
import TopLocationHolder from '../Location/TopLocationHolder'

export const Footer = () => {
    return (
        <div className="flex flex-col border-b   sm: shadow w-full  bg-red-800 text-white">
            <div className="px-4 py-4 ">
                <img src="/images/boxmeal-logo.png" style={{ height: 50 }} />
            </div>

            <div className="flex my-2 border-b border-white py-4 ">
                <ul className="flex-1 flex  px-2 flex-col text-sm">
                    <li> About us</li>
                    <li> How It Works?</li>
                    <li> Terms & Conditions</li>
                    <li>Refund Policy</li>
                </ul>
                <ul className="flex-1   px-2 flex flex-col text-sm">
                    <li> About us</li>
                    <li> How It Works?</li>
                    <li> Terms & Conditions</li>
                    <li>Refund Policy</li>
                </ul>
            </div>
            <div className="flex-1    mx-auto">
                Boxmeal LLC, &copy;2021
               </div>
            {/*   <div className="flex-1   pl-auto  text-sm "> <TopLocationHolder/></div> */}
        </div>
    )
}
