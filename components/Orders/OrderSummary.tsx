import React from 'react'

interface Props {
    
}

const OrderSummary = (props: any) => {
    return (
        <div className="flex flex-col">
            <div>{props.mealPlanName}</div>
            <div>{props.mealSubscriptionPlanName}</div>
            <div>{props.mealPlanQty}</div>
            <div></div>
        </div>
    )
}

export default OrderSummary
