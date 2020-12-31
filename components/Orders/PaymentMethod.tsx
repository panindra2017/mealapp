import React from 'react'

interface Props {

}

const PaymentMethod = (props: any) => {
    return (
        <div className="flex flex-col hadow-2xl  p-2 uppercase py-4 text-base ">
            <div className="border-b my-2 py-4"> Choose Payment Method </div>
            <div className="flex ">
                <div className="">NET BANKING - CREDIT CARD - DEBIT CARD</div>
                <div className="px-4"> <input type="checkbox" checked={true}  /> </div>
                <div className=" px-4">{props.mealSubscriptionPlanName}</div>
            </div>
            <div></div>
        </div>
    )
}

export default PaymentMethod
