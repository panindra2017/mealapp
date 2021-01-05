import React from 'react'

import dynamic from 'next/dynamic'


const CircleGraph = dynamic(
    () => import('./CircleGraph'),
    { ssr: false }
)

const NutritionChart = () => {
    return (<div className="flex  flex-col text-lg ">
        <div className="flex-1 flex flex-col   mx-1 my-4 ">
         
            <div className="flex-1  flex flex-row text-xs">
                <div className=" flex-1 px-2 shadow-lg p-2"> <div className="px-2">Carbohydrates </div>
                <div className="px-2 font-bold">48 gms </div>  </div>
                <div className=" flex-1 px-2 shadow-lg p-2"> <div className="px-2">Fat </div>
                    <div className="px-2 font-bold">32 gms </div>  </div>

                <div className=" flex-1 px-2 shadow-lg p-2"> <div className="px-2">Protiens </div>
                <div className="px-2 font-bold">74 gms </div>  </div>

            </div></div>
        <div className="flex-1 flex  items-center mx-1 my-4 ">
            <div className="flex-1 flex flex-col items-center mx-1 shadow-lg"> <div className="flex "><CircleGraph label={"Carbs"} value={70} /></div>
                <div className="flex text-xs -mt-4 py-4 ">Carbs (Kcal) </div> </div>
            <div className="flex-1 flex flex-col items-center mx-1 shadow-lg">

                <div className="flex "><CircleGraph label={"Fat"} value={5} /></div>
                <div className="flex text-xs -mt-4 py-4">Fat  (Kcal) </div> </div></div>


    </div>
    )
}

export default NutritionChart
