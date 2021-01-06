import { useRouter } from 'next/dist/client/router';
import React, { useContext, useEffect, useState } from 'react';
import _ from 'lodash';
import { AppLayout } from '../layout/AppLayout';
import Howitwork from '../components/HowItWorks/Howitwork';
import { mealplans } from '../data/MealPlans';
import RateCard from '../components/Subscribe/RateCard';
import BuyNowButton from '../components/Subscribe/BuyNowButton';
import { CartContext } from '../components/Cart/CartContextProvider';
import { useCookies } from 'react-cookie';
const SubscribePage = () => {
    const router = useRouter();
    const [mealPlan, setMealPlan] = useState<any>()
    const { addToCart } = useContext(CartContext)
    const [cookies, setCookie] = useCookies(['order'])
    const [, setsubscriptionPLan] = useState<any>(null)
    const [selectedPlan, setselectedPlan] = useState(null)
    const [itemid, setitemId] = useState<any>()
    useEffect(() => {
        setitemId(router.query.mealid)
    }, [router.query.mealid])
    useEffect(() => {
        if (itemid) {
            const curMealPlan = _.find(mealplans, { 'id': Number(itemid) ? Number(itemid) : 0 })
            setMealPlan(curMealPlan)
        }
    }, [itemid])
    useEffect(() => {
        if (mealPlan && mealPlan.plans) {
            setsubscriptionPLan(mealPlan.plans)
        }
    }, [mealPlan])

    function onsubmit(data: any) {
        if (data !== null) {
            router.push(`/signup?mealid`)
        }
    }
    function onSelect(data: any) {
        addToCart({
            mealPlanName: mealPlan.name, mealPlanId: mealPlan.id, mealPlanQty: 1,
            planImage:data.image,
            mealSubscriptionPlanName: data.name, mealSuscriptionId: data.subscribeId
        })
        setselectedPlan(data)
    }

    useEffect(() => {

    }, [selectedPlan, cookies.order])
    return (
        <AppLayout>

            <div className="flex flex-col">
                <div className=" w-full -mt-4">
                    <img src={mealPlan ? mealPlan.images : "#"} />
                </div>
                <div className="flex my-2 flex-col -mt-4 mx-2 shadow-xl bg-white rounded-3xl">
                    <div className="text-2xl font-bold text-center py-2">{mealPlan ? mealPlan.name : ""}
                        {mealPlan && mealPlan.veg && mealPlan ? " - Veg" : "- Non Veg"}
                    </div>

                    <div className="py-4 px-4  text-center">

                        <div className="flex flex-col my-2 text-lg border-b py-4 border-red-800">
                            Choose Subscription Plan</div>
                        <div className="flex  flex-col my-2">
                            {mealPlan && mealPlan.plans && mealPlan.plans.map((item: any) => {
                                return <div className={` w-1/2 cursor-pointer ${selectedPlan && selectedPlan.subscribeId === item.subscribeId ? 'bg-green-50' : ""}`}>
                                    <RateCard {...item} isSelected={selectedPlan && selectedPlan.subscribeId === item.subscribeId ? true : false} onSelect={() => { onSelect({ name: item.name, subscribeId: item.subscribeId }) }} /> </div>

                            })}


                        </div>
                    </div>
                    <div className="py-8 px-4 "><BuyNowButton onSubmit={(e: any) => { onsubmit(e) }} /></div>
                    <div className="py-8 px-4 "><Howitwork /></div>

                </div>
            </div>
        </AppLayout>
    )
}

export default SubscribePage
