import React from 'react'


const RateCard = (props: any) => {
    return (

        <div className={` ${props.isSelected ? 'bg-green-2000' : ""} flex flex-row my-1 px-1  py-8 items-left shadow`} >
            <div className="px-4">{props.subscribeId}</div>
            <div className="flex-1">{props.name}</div>
            <div className="px-2">{props.price}</div>
            <div className="px-2">{props.discount}</div>
        </div>
    )
}

export default RateCard