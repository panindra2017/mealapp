import React from 'react'

interface Props {

}

const OrderSummary = (props: any) => {
    return (
        <div className="flex flex-col hadow-2xl  p-2 uppercase py-4 text-base ">
            <div className="border-b my-2 py-4"> Order Summmary  </div>
            <div className="flex ">
                <div className="">{props.mealPlanName}</div>
                <div className="px-4"> - </div>
                <div className=" px-4">{props.mealSubscriptionPlanName}</div>
            </div>
            <div></div>
        </div>
    )
}

export default OrderSummary
