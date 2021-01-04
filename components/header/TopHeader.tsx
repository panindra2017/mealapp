import React from 'react'
import Link from 'next/link'
import TopLocationHolder from '../Location/TopLocationHolder'

export const TopHeader = () => {
    return (
        <div className="flex flex-wrap border-b  items-center shadow w-full py-3 bg-red-600">
            <div className=" mx-auto  ">
                <Link href="/">
                <img src="/logo.svg" style={{width:"110px"}} className="cursor-pointer" /></Link></div>
          {/*   <div className="flex-1   pl-auto  text-sm "> <TopLocationHolder/></div> */}
        </div>
    )
}
