import React from 'react'
import { mealplans } from '../../data/MealPlans'
import _ from 'lodash'
interface Props {

}

const PaymentOrderSummary = (props: any) => {

    const curMealPlan = _.find(mealplans, { 'id': props.id})
    return (
        <div className="flex flex-col hadow-2xl  p-2 uppercase py-4 text-base ">
            <div className="border-b my-2 py-4"> Review Order before Payment </div>
            <div className="flex ">
                <div className="">{props.mealPlanName}</div>
                <div className="px-4"> <img src={curMealPlan.images} /></div>
                <div className=" px-4">{props.mealSubscriptionPlanName}</div>
            </div>
            <div></div>
        </div>
    )
}

export default PaymentOrderSummary
