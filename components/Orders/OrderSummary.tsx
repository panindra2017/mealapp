import input from 'postcss/lib/input'
import React, { useEffect } from 'react'

interface Props {

}

const OrderSummary = (props: any) => {

    useEffect(() => {
       
    }, [])
    return (
        <div className="w-full  cursor-pointer py-1">
            <div className="flex-1 my-2 py-4 border-b"> Order Summmary  </div>
            <div className="flex-1 flex border p-1">
                <div className=""><img src={props.image} style={{ width: "100px",height:"50px" }} /> </div>
                <div className="flex-1 px-4">
                    <div className="text-xs py-1">{props.mealPlanName}</div>
                    <div className="text-xs ">{props.mealSubscriptionPlanName}</div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default OrderSummary
