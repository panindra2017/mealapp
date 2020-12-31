import React from 'react'
import HomeBanner from '../components/banners/HomeBanner'
import CustomerProfile from '../components/CustomerProfile/CustomerProfile'
import AccordianFaq from '../components/FAQ/AccordianFaq'
import Itemcard from '../components/Items/Itemcard'
import HomeMealPlanMenuTab from '../components/MealPlanMenuTab/HomeMealPlanMenuTab'
import WhySubscribeScroller from '../components/whysubscribe/WhySubscribeScroller'
import { AppLayout } from '../layout/AppLayout'


export default function Dashboard() {
  return (
    <AppLayout><div className="flex flex-col">

     

      <div>

      <CustomerProfile/>
      </div>


       


    </div></AppLayout>

  )
}
