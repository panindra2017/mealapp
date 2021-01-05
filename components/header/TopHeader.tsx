import React from 'react'
import Link from 'next/link'

export const TopHeader = () => {
    return (
        <div className="flex flex-wrap    items-center shadow-lg w-full py-2 bg-gray-800">
              <div className="px-4 ">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" 
                 width="34"
                 height="34" 
                 viewBox="0 0 24 24"
                 stroke-width="1.0" stroke="#ffffff" 
                 fill="none"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="20" y2="18" />
</svg>
                </div>
                <div className="flex-1   ">
                <Link href="/">
                <img src="/images/boxmeal-logo.png" style={{width:"100px"}} className="cursor-pointer" /></Link></div>
                <div className=" px-4 ">
                <Link href="/dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="7" r="4" />
  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
</svg>
</Link></div>
        
        </div>
    )
}
