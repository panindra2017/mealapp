import React from 'react'
import HomeBanner from '../components/banners/HomeBanner'
import AccordianFaq from '../components/FAQ/AccordianFaq'
import Itemcard from '../components/Items/Itemcard'
import HomeMealPlanMenuTab from '../components/MealPlanMenuTab/HomeMealPlanMenuTab'
import WhySubscribeScroller from '../components/whysubscribe/WhySubscribeScroller'
import { AppLayout } from '../layout/AppLayout'


export default function Home() {
  return (
    <AppLayout><div className="flex flex-col">

      <div className="shadow-lg mb-4">
        <HomeBanner />
      </div>

      <div >
        <HomeMealPlanMenuTab />
      </div>

      <div><AccordianFaq/></div>

    </div></AppLayout>

  )
}
