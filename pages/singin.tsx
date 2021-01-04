import React from 'react'
import HomeBanner from '../components/banners/HomeBanner'
import AccordianFaq from '../components/FAQ/AccordianFaq'
import Itemcard from '../components/Items/Itemcard'
import HomeMealPlanMenuTab from '../components/MealPlanMenuTab/HomeMealPlanMenuTab'
import SinginComponent from '../components/Signin/SinginComponent'
import WhySubscribeScroller from '../components/whysubscribe/WhySubscribeScroller'
import { AppLayout } from '../layout/AppLayout'


export default function SigninPage() {
  return (
    <AppLayout><div className="flex flex-col">

      <div className="flex">
        <SinginComponent />
      </div>
      </div>
     </AppLayout>

  )
}
