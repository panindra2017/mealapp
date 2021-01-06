import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Cart/CartContextProvider'


const OrderTotalSummary = () => {

    const { orderTotalSummary } = useContext(CartContext)

    if(!orderTotalSummary ||orderTotalSummary===null)
    {
        return <div></div>
    }
    return (
        <div className="flex flex-col shadow-2xl  p-2  py-4 text-xs">
            <div className="border-b my-2 py-4 flex-col  px-4"> Subscription Payment Details                                   </div>
             
            <div className="flex flex-col  px-4 ">
              
                    <div className="flex flex-row  py-2">

                    <div className=" ">
                           Meal Package Cost :

</div><div className="flex-1">
{orderTotalSummary.price}

</div>
                    </div>    <div className="flex flex-row  ">

                        <div className="">
                           Discount :

</div><div className="flex-1">
                           0

</div>
                    </div>
                    <div className="flex flex-row  font-bold border-b border-t py-4">

                    <div className="">
                            Total Payable
</div><div className="flex-1">
{orderTotalSummary.price}

</div>
                    </div>      </div>
            <div></div>
        </div>
    )
}

export default OrderTotalSummary
