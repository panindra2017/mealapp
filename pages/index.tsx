import React from 'react'
import HomeBanner from '../components/banners/HomeBanner'
import Itemcard from '../components/Items/Itemcard'
import HomeMealPlanMenuTab from '../components/MealPlanMenuTab/HomeMealPlanMenuTab'
import WhySubscribeScroller from '../components/whysubscribe/WhySubscribeScroller'
import { AppLayout } from '../layout/AppLayout'


export default function Home() {
  return (
    <AppLayout><div className="flex flex-col">

      <div className="">
        <HomeBanner />

      </div>

      <div>

        <HomeMealPlanMenuTab />
      </div>


      <div className="flex flex-col my-2"> <Itemcard />
        <Itemcard />
        <Itemcard />
        <Itemcard />
        <Itemcard />
        <Itemcard />
        <Itemcard /></div>
      <div></div>


    </div></AppLayout>

  )
}
