import React from 'react'
import HomeBanner from '../components/banners/HomeBanner'
import HomeSmallSlider from '../components/banners/HomeSmallSlider'
import AccordianFaq from '../components/FAQ/AccordianFaq'
import Itemcard from '../components/Items/Itemcard'
import HomeMealPlanMenuTab from '../components/MealPlanMenuTab/HomeMealPlanMenuTab'
import WhySubscribeScroller from '../components/whysubscribe/WhySubscribeScroller'
import { AppLayout } from '../layout/AppLayout'


export default function Home() {
  return (
    <AppLayout><div className="flex flex-col">

      <div className="shadow-lg my-2">
        <HomeBanner />
      </div>
   
      <div > <div className="shadow-lg   ">
        <HomeSmallSlider />
      </div>
        <HomeMealPlanMenuTab />
      </div>
         
     {/*  <div className="">
        <img src="/images/banners/why-meal-box.png" style={{width:'100%'}} ></img></div> */}

        <div className="  my-4 mb-4"><AccordianFaq /></div>
      <div className="my-2 px-16">
        <img src="/images/app-store.png" ></img></div>
    </div></AppLayout>

  )
}
