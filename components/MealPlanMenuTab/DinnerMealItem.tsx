import React from 'react'
import { mealplans } from '../../data/MealPlans'
import MealPlanItem from '../Items/MealPlanItem'
import _ from 'lodash'
import { useRouter } from 'next/dist/client/router'


interface Props {

}

const DinnerMealItem = (props: Props) => {

    var _mealplans = _.filter(mealplans, { 'planType': "Dinner" });
   

    return (
        <div className="flex  flex-wrap items-center">
            {_mealplans.map((item: any) => {

                return <div className="w-1/2 px-1 my-1 "><MealPlanItem  {...item} /></div>
            })}

        </div>
    )
}

export default DinnerMealItem
