import React, { useState } from 'react'
import { useCookies } from "react-cookie"
import { useEffect } from 'react';
import { mealplans } from '../../data/MealPlans';
import _ from 'lodash'
export const CartContext = React.createContext({} as any);
const CartContextProvider = ({ children }: any) => {
    const [cookies, setCookie] = useCookies(['order'])
    const [] = useState(null)
    const [cart] = useState<any>(cookies.order)

    const [orderTotalSummary, setOrderSummary] = useState(null)
    function addToCart(data: any) {
console.log("Add to cart",data)
        setCookie('order', null, { path: '/' });
        setCookie('order', {
            mealPlanName: data.mealPlanName, mealPlanId: data.mealPlanId, mealPlanQty: data.mealPlanQty,
            image:data.planImage,
            mealSubscriptionPlanName: data.mealSubscriptionPlanName, mealSuscriptionId: data.mealSuscriptionId
        }, { path: '/' });

    }

    function clearCart() {
        setCookie('order', null, { path: '/' });
    }

    useEffect(() => {
        if (cookies.order) {
            const curMealPlan = _.find(mealplans, { 'id': Number(cookies.order.mealPlanId) ? Number(cookies.order.mealPlanId) : 0 })
            const curSubScription = _.find(curMealPlan.plans, { 'subscribeId': Number(cookies.order.mealSuscriptionId) ? Number(cookies.order.mealSuscriptionId) : 0 })
            if (curSubScription) {
                setOrderSummary({ id: curSubScription.id, qty: 1, price: curSubScription.price })
            }
                }
    }, [cookies])
    return (
        <div>
            <CartContext.Provider value={{ cart, addToCart, clearCart,orderTotalSummary }}>
                {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider
