import React from 'react'
import TopLocationHolder from '../Location/TopLocationHolder'

export const TopHeader = () => {
    return (
        <div className="flex flex-wrap border-b  items-center shadow w-full py-2">
            <div className=" mx-auto  "><img src="/logo.svg" style={{width:"110px"}}/></div>
          {/*   <div className="flex-1   pl-auto  text-sm "> <TopLocationHolder/></div> */}
        </div>
    )
}
