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
import DatePicker from "react-datepicker";
import EditSvg from '../components/common/svgs/EditSvg';
import OrderTotalSummary from '../components/Orders/OrderTotalSummary';
import PayoutButton from '../components/Subscribe/PayOutButton';
import { useRouter } from 'next/dist/client/router';
const SubscribePage = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [orders, setorders] = useState(null)
    const router = useRouter();
     const [cookies] = useCookies(['order'])
    useEffect(() => {
        if (cookies.order !== null) {
            setorders(cookies.order)
        }
    }, [cookies])

    function onsubmit(data: any) {
        if (data !== null) {
            router.push(`/payment`)
        }
    }

    useEffect(() => {
       console.log(orders)
    }, [orders])
    return (
        <AppLayout>

            <div className="flex flex-col">
                <div className="flex my-4 py-4  px-4">
                    <OrderSummary {...orders} />
                </div>
                <div className="flex flex-row  my-4">
                    <ContactForm />
                </div>
                <div className="flex flex-row  my-8">
                    <AddressForm />
                </div>
                <div className="flex flex-col px-8 items-center shadow my-4 py-2" >
                    <div className=" flex-1 my-2">Choose  Start  Delviery Date </div>
                    <div className="border p-1 flex">
                        <div className="px-2"><DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} placeholderText="Pick a date to start delivering orders " /></div>
                        <div className="px-2"><EditSvg size={24} /></div>
                    </div>
                </div>
                <div className="flex flex-col px-8">
                    <div className=""><OrderTotalSummary /></div>
                </div>
                <div className="mx-auto my-4">
                    <PayoutButton onSubmit={(e: any) => { onsubmit({}) }} /></div>

            </div>
        </AppLayout>
    )
}

export default SubscribePage
