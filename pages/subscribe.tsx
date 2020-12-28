import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { AppLayout } from '../layout/AppLayout';
import Howitwork from '../components/HowItWorks/Howitwork';
import { mealplans } from '../data/MealPlans';
import MealPlanItems from '../components/Items/MealPlanItems';
import Itemcard from '../components/Items/Itemcard';
import SubscribeButton from '../components/Subscribe/SubscribeButton';
import RateCard from '../components/Subscribe/RateCard';
const SubscribePage = () => {
    const router = useRouter();
    const [meatPlan, setMealPlan] = useState<any>()

    const [subscriptionPlan, setsubscriptionPLan] = useState<any>(null)
    const [itemid, setitemId] = useState<any>()
    useEffect(() => {
        setitemId(router.query.mealid)
    }, [router.query.mealid])
    useEffect(() => {
        if (itemid) {
            console.log("itemid", itemid)
            const curMealPlan = _.find(mealplans, { 'id': Number(itemid) ? Number(itemid) : 0 })
            console.log(curMealPlan)
            setMealPlan(curMealPlan)
        }
    }, [itemid])
    useEffect(() => {
        if (meatPlan && meatPlan.plans) {
            setsubscriptionPLan(meatPlan.plans)

        }
    }, [meatPlan])
    return (
        <AppLayout>

            <div className="flex flex-col">
                <div className=" w-full -mt-4">
                    <img src={meatPlan ? meatPlan.images : "#"} />
                </div>
                <div className="flex my-2 flex-col -mt-4 mx-2 shadow-xl bg-white rounded-3xl">
                    <div className="text-2xl font-bold text-center py-2">{meatPlan ? meatPlan.name : ""}
                        {meatPlan && meatPlan.veg && meatPlan ? " - Veg" : "- Non Veg"}
                    </div>

                    <div className="py-8 px-4 ">
                        <div className="flex flex-col my-2 text-lg border-b py-4 border-red-800">
                            Choose Subscription Plan</div>
                        <div className="flex flex-col my-2">
                            {meatPlan && meatPlan.plans && meatPlan.plans.map((item: any) => {
                                return <RateCard {...item} />

                            })}


                        </div>
                    </div>

                    <div className="py-8 px-4 "><Howitwork /></div>

                </div>
            </div>
        </AppLayout>
    )
}

export default SubscribePage
