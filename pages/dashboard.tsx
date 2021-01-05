import React from 'react'
import { useState } from 'react'
import CustomerProfile from '../components/CustomerProfile/CustomerProfile'
import { AppLayout } from '../layout/AppLayout'
import _ from 'lodash';
import Head from 'next/head'
import NutritionChart from '../components/Graphs/NutritionChart';
import CustomerDeliveryAddresses from '../components/CustomerProfile/CustomerDeliveryAddresses';
import TodaysMeal from '../components/TodaysMeal/TodaysMeal';
import TodayItems from '../components/TodayItems/TodayItems';
import NutritionTab from '../components/DashboardComponents/NutritionTab';


export default function Dashboard() {
  const [] = useState<any>()

  return (
    <AppLayout>
      <Head>
        <title>Boxmeal - Customer Dashboard</title>
        {/* Meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <script type="https://cdn.jsdelivr.net/npm/react-apexcharts"></script>
      </Head>


      <div className="flex flex-col">

        <div className=" flex-1 ">
          <CustomerProfile />
        </div>
        <div className=" flex-1 ">
          <TodayMenu />
        </div>
        <div className=" flex-1 ">
          <CustomerDeliveryAddresses />
        </div>
        <div className=" flex-1 my-4">
          <NutritionTab />
        </div>
      </div></AppLayout>

  )
}


const TodayMenu = () => {

  return <React.Fragment>
    <div className="flex flex-col  px-4 ">
      <div className=" text-lg font-medium ">
        Today's Menu
        </div>
      <div className="w-full my-4">
        <TodayItems />
      </div>
    </div>
  </React.Fragment>
}

