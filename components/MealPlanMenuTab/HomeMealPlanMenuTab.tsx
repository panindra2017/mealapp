import React, { useState } from 'react'
import BreakfastMealItem from './BreakfastMealItem'
import DinnerMealItem from './DinnerMealItem'
import LaunchMealtem from './LaunchMealtem'


interface Props {

}

const HomeMealPlanMenuTab = (props: Props) => {
    const [curtab, setcurtab] = useState(1)
    return (
        <div className="flex flex-col">
            <div className="flex my-2 py-2 items-center px-4 text-sm font-bold   outline-none">

                <div className="flex-1 cursor-pointer  text-base font-bold">

                    <button className={`flex-1 px-2 focus:outline-none  outline-none hover:outline-none  py-2 ${curtab === 1 ? " border-b  border-red-700  text-red-700 " : ""}`}
                        onClick={(e: any) => { setcurtab(1) }}>Breakfast</button></div>
                <div className="flex-1 cursor-pointer  text-base font-bold">

                    <button className={`flex-1 px-2 focus:outline-none   py-2 ${curtab === 2 ? " border-b  border-red-700  text-red-700 " : ""}`}
                        onClick={(e: any) => { setcurtab(2) }}>Lunch</button></div>
  <div className="flex-1 cursor-pointer  text-base font-bold">

<button className={`flex-1 px-2 focus:outline-none   py-2 ${curtab === 3 ? " border-b  border-red-700  text-red-700 " : ""}`}
    onClick={(e: any) => { setcurtab(3) }}>Dinner</button></div>
              {/*   <div className="flex-1 cursor-pointer  text-base font-bold">

                    <button className={`flex-1 px-2 focus:outline-none   py-2 ${curtab === 3 ? " border-b  border-red-700  text-red-700 " : ""}`} onClick={(e: any) => { setcurtab(3) }}>Dinner</button></div> */}

            </div>
            <div className="flex flex-col">
                {curtab === 1 && <div><BreakfastMealItem /></div>}
                {curtab === 2 && <div><LaunchMealtem /></div>}
                {curtab === 3 && <div><LaunchMealtem /></div>}
    {/*             {curtab === 3 && <div><DinnerMealItem /></div>} */}

            </div>
        </div>
    )
}

export default HomeMealPlanMenuTab
