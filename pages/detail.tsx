import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { AppLayout } from '../layout/AppLayout';
import Howitwork from '../components/HowItWorks/Howitwork';
import { mealplans } from '../data/MealPlans';
import MealPlanItems from '../components/Items/MealPlanItems';
import Itemcard from '../components/Items/Itemcard';
import SubscribeButton from '../components/Subscribe/SubscribeButton';
const detail = () => {
    const router = useRouter();
    const [meatPlan, setMealPlan] = useState<any>()
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


    function onsubmit(data: any) {
        if (data !== null) {
            router.push(`/subscribe?mealid=${data}`)
        }

    }
    return (
        <AppLayout><div className="flex flex-col">
            <div className=" w-full ">
                <img src={meatPlan ? meatPlan.images : "#"} />
            </div>
            <div className="flex my-2 flex-col -mt-4 mx-2 shadow-xl bg-white rounded-3xl">
                <div className="text-2xl font-bold text-center py-2">{meatPlan ? meatPlan.name : ""}
                    {meatPlan && meatPlan.veg && meatPlan ? " - Veg" : "- Non Veg"}
                </div>
                <div className="text-sm px-4">
                    {meatPlan ? meatPlan.description : ""}
                </div>
                <div className="mx-auto my-4"><SubscribeButton onSubmit={(e: any) => { onsubmit(meatPlan ? meatPlan.id : null) }} /></div>
                <div className="py-8 px-4 "><Howitwork /></div>
                <div className="py-8 px-4 ">
                    <div className="flex flex-col my-2 text-lg border-b py-4 border-red-800">
                        UpComing Servings </div>
                    <div className="flex flex-col my-2">
                        {meatPlan && meatPlan.items && meatPlan.items.map((item: any) => {
                            return <Itemcard {...item} />

                        })}


                    </div>
                    <MealPlanItems id={itemid} />
                </div>
            </div>
        </div>
        </AppLayout>
    )
}

export default detail
