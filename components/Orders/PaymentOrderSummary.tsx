import React from 'react'
import { mealplans } from '../../data/MealPlans'
import _ from 'lodash'

const PaymentOrderSummary = (props: any) => {

    return (
        <div className="flex flex-col hadow-2xl  p-2 uppercase py-4 text-base ">
            <div className="border-b my-2 py-4"> Review Order before Payment </div>
            <div className="flex ">
         
            <div className="flex-1 flex border p-1">
                <div className=""><img src={props.image} style={{ width: "100px",height:"50px" }} /> </div>
                <div className="flex-1 px-4">
                    <div className="text-xs py-1">{props.mealPlanName}</div>
                    <div className="text-xs ">{props.mealSubscriptionPlanName}</div>
                </div>
        
          
        </div>
            </div>
            <div></div>
        </div>
    )
}

export default PaymentOrderSummary
