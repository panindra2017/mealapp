import React from 'react'
import TickSvg from '../common/svgs/TickSvg'


const RateCard = (props: any) => {
    return (<div className="flex flex-row w-full shadow-lg  items-center" onClick={(e: any) => { props.onSelect(e) }}>


        <div className={`flex-1 flex-col  py-4 items-start `} >
            <div className="flex-1 text-xl text-gray-600">{props.title}</div>
            <div className="flex-1 my-4"></div><div className=" ">{props.duration}  Rs. {props.price} / Week</div>
        </div>
        <div className=" text-xl text-gray-600">{props.isSelected ? <TickSvg stroke="green" strokeWidth={2} size={32} /> : ""}</div>



    </div>
    )
}

export default RateCard
