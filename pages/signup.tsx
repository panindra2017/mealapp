import React, { useContext } from 'react';
import _ from 'lodash';
import { AppLayout } from '../layout/AppLayout';
import SubscribeButton from '../components/Subscribe/SubscribeButton';
import Datetime from "react-datetime"
import { CartContext } from '../components/Cart/CartContextProvider';
import { useEffect } from 'react';
import { useState } from 'react';
import useCookies from 'react-cookie/cjs/useCookies';
import OrderSummary from '../components/Orders/OrderSummary';
import ContactForm from '../components/Signup/ContactForm';
import AddressForm from '../components/Signup/AddressForm';
const SubscribePage = () => {
    const [orders, setorders] = useState(null)
    const { addToCart } = useContext(CartContext)
    const [cookies] = useCookies(['order'])
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


                    <div><OrderSummary {...orders} /></div>
                </div>
                <div className="flex flex-row  my-4">
                    <ContactForm />
                </div>
                <div className="flex flex-row  my-8">
                    <AddressForm />
                </div>

                <div className="flex flex-col px-8 items-center" >
                    <div className=" flex-1 my-2">Subscription Start Date</div>
                    <div className="">
                <Datetime className="border px-4" /> 
                
                </div>
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
