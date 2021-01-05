import React from 'react'


const RateCard = (props: any) => {
    return (<div className="flex flex-row">
        <div className=" text-xl text-gray-600">{props.isSelected ? " SELECTED" : ""}</div>
        <div className={`flex flex-col shadow-lg py-4 px-2`} onClick={(e: any) => { props.onSelect(e) }}>
            <div className="flex-1 text-xl text-gray-600">{props.title}</div>
            <div className="flex-1 my-4"></div> <div className=" ">{props.duration}  Rs. {props.price} / Week</div>



        </div> </div>
    )
}

export default RateCard
