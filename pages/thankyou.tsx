import React, { useContext } from 'react';
import _ from 'lodash';
import { AppLayout } from '../layout/AppLayout';
import { CartContext } from '../components/Cart/CartContextProvider';
import { useEffect } from 'react';
import { useState } from 'react';
import useCookies from 'react-cookie/cjs/useCookies';
import OrderTotalSummary from '../components/Orders/OrderTotalSummary';
import PayoutButton from '../components/Subscribe/PayOutButton';
import PaymentOrderSummary from '../components/Orders/PaymentOrderSummary';
import PaymentMethod from '../components/Orders/PaymentMethod';
import { useRouter } from 'next/dist/client/router';
import ThankyouWithSummary from '../components/ThankYou/ThankyouWithSummary';
const PaymentPage = () => {
    const [] = useState(new Date());
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
            router.push(`/thankyou`)
        }
    }


    useEffect(() => {
        console.log("orders ", orders)
    }, [orders])
    return (
        <AppLayout>

            <div className="flex flex-col">



                <div><ThankyouWithSummary /></div>


            </div>

        </AppLayout>
    )
}

export default PaymentPage
