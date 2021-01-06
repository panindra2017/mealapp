import React from 'react'
import TickSvg from '../common/svgs/TickSvg'


const RateCard = (props: any) => {
    return (<div className="mx-1 flex flex-row w-full shadow-lg  items-center px-4" onClick={(e: any) => { props.onSelect(e) }}>


        <div className={`flex-1 flex-row py-4 items-start `} >
            <div className="flex-1  text-gray-600">{props.title}</div>
            <div className="flex-1 my-4">{props.duration} </div><div className="text-sm "> Rs. {props.price} / Week</div>
        </div>
        {props.isSelected ? <div className="  text-gray-600 rounded-full  bg-green-800 p-1"><TickSvg stroke="white" strokeWidth={2} size={16} /></div> : ""}
    </div>
    )
}

export default RateCard
