import React from 'react'

import dynamic from 'next/dynamic'


const CircleGraph = dynamic(
    () => import('./CircleGraph'),
    { ssr: false }
)
interface Props {

}

const NutritionChart = (props: Props) => {
    return (<div className="flex  flex-col">
        <div className="flex  text-xl  font-bold px-4 py-4 border-b my-2">This Week Nutrition Tracker </div>
        <div className="flex  flex-col ">
            <div className="flex-1 flex flex-col items-center mx-1 shadow-lg"> <div className="flex "><CircleGraph label={"Carbs"} value={70} /></div>
                <div className="flex text-xs -mt-4 ">1245 Kcal </div> </div>
            <div className="flex-1 flex flex-col items-center mx-1 shadow-lg"> <div className="flex "><CircleGraph label={"Fat"} value={5} /></div>
                <div className="flex text-xs -mt-4 ">1352 Kcal </div> </div>


        </div>
        <div className="flex  shadow-xl flex-col ">
        <div className="flex  text-xl  font-bold px-4 py-4 border-b my-2">Overall Calorie In this Week</div>
        <div className="flex  flex-col ">
            <div className="flex-1 flex flex-col items-center mx-1 shadow-lg"> <div className="flex "><CircleGraph label={"Carbs"} value={70} /></div>
                <div className="flex text-xs -mt-4 ">1245 Kcal / 2500 Kcal ( ) </div> </div>
            

                </div>
        </div>
    </div>
    )
}

export default NutritionChart
