import React, { useState } from 'react'
import { useCookies } from "react-cookie"
import { useEffect } from 'react';
export const CartContext = React.createContext({} as any);
const CartContextProvider = ({ children }: any) => {
    const [cookies, setCookie] = useCookies(['order'])
    const [] = useState(null)
    const [cart] = useState<any>(cookies.order)
    function addToCart(data: any) {
      
        setCookie('order', null, { path: '/' });
        setCookie('order', {
            mealPlanName: data.mealPlanName, mealPlanId: data.mealPlanId, mealPlanQty: data.mealPlanQty,
            mealSubscriptionPlanName: data.mealSubscriptionPlanName, mealSuscriptionId: data.mealSuscriptionId
        }, { path: '/' });

    }

    function clearCart() {
        setCookie('order', null, { path: '/' });
    }

    useEffect(() => {
console.log(cart)
    }, [cart])
    return (
        <div>
            <CartContext.Provider value={{ cart, addToCart, clearCart }}>
                {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider
