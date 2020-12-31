import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Cart/CartContextProvider'

interface Props {

}

const OrderTotalSummary = (props: any) => {

    const { orderTotalSummary } = useContext(CartContext)

    if(!orderTotalSummary ||orderTotalSummary===null)
    {
        return <div></div>
    }
    return (
        <div className="flex flex-col shadow-2xl  p-2 uppercase py-4 text-base ">
            <div className="border-b my-2 py-4 flex-col"> Pa                                     </div>
             
            <div className="flex flex-col px-8">
              
                    <div className="flex flex-row px-8">

                        <div className="flex-1">
                           Meal Package Cost

</div><div className="flex-1">
{orderTotalSummary.price}

</div>
                    </div>    <div className="flex flex-row px-8">

                        <div className="flex-1">
                           Discount

</div><div className="flex-1">
                           0

</div>
                    </div>
                    <div className="flex flex-row px-8 font-bold">

                        <div className="flex-1">
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
