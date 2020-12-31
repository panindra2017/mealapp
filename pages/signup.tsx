import React, { useContext } from 'react';
import _ from 'lodash';
import { AppLayout } from '../layout/AppLayout';
import SignupForm from '../components/Signup/SignupForm';
import SubscribeButton from '../components/Subscribe/SubscribeButton';
import Datetime from "react-datetime"
import { CartContext } from '../components/Cart/CartContextProvider';
import { useEffect } from 'react';
import { useState } from 'react';
import { mealplans } from '../data/MealPlans';
import useCookies from 'react-cookie/cjs/useCookies';
const SubscribePage = () => {
    const [orders, setorders] = useState(null)
    const { cart, addToCart } = useContext(CartContext)
    const [cookies, setCookie] = useCookies(['order'])
    useEffect(() => {
        if (cookies.order !== null) {

            setorders(cookies.order)
        }
    }, [cookies])

  

    useEffect(() => {
        console.log("orders ", orders)
    }, [orders])
    return (
        <AppLayout>

            <div className="flex flex-col">
                <div className="flex flex-col my-4 py-8  shadow items-center">

                    <div>Order Summmary : </div>
                    <div>{JSON.stringify(orders)}</div>
                </div>
                <div className="flex flex-row  ">
                    <SignupForm />
                </div>

                <div className="flex flex-col px-8 items-center" >
                    <div className=" flex-1 my-2">Starting Date</div>
                    <div className="">    <Datetime className="border px-4" /> </div>



                </div>

                <div className="flex flex-col px-8">
                    <div className="flex flex-row px-8   ">

                        <div className="flex-1">
                            Item Total

</div>  <div className="flex-1">
                            Rs 4470.00

</div>
                    </div>
                    <div className="flex flex-row px-8">

                        <div className="flex-1">
                            Price Discount

</div><div className="flex-1">
                            Rs 4470.00

</div>
                    </div>    <div className="flex flex-row px-8">

                        <div className="flex-1">
                            Pacaking Charge

</div><div className="flex-1">
                            Rs 4470.00

</div>
                    </div>
                    <div className="flex flex-row px-8 font-bold">

                        <div className="flex-1">
                            Total Payable
</div><div className="flex-1">
                            Rs 4470.00

</div>
                    </div>      </div>
                <div className="mx-auto my-4">
                    <SubscribeButton onSubmit={() => { addToCart({}) }} /></div>

            </div>
        </AppLayout>
    )
}

export default SubscribePage
