import React from 'react'
import { useState } from 'react'
import CustomerProfile from '../components/CustomerProfile/CustomerProfile'
import { AppLayout } from '../layout/AppLayout'
import _ from 'lodash';
import Head from 'next/head'
import NutritionChart from '../components/Graphs/NutritionChart';


export default function Dashboard() {
  const [] = useState<any>()

  return (
    <AppLayout>



      <Head>
        <title>GROWTH TRACKED</title>

        {/* Meta tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>


        {/* jQuery first, then Popper.js, then Bootstrap JS */}
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <script type="https://cdn.jsdelivr.net/npm/react-apexcharts"></script>

      </Head>


      <div className="flex flex-col">
        <div className="flex-1">
          <CustomerProfile />
        </div>
        <div className="flex flex-wrap">
          <TodayMenu />
        </div>
        <div className="flex flex-wrap my-4 px-4">
          <NutritionChart />
        </div>
      </div></AppLayout>

  )
}


const TodayMenu = (data: any) => {


  return <React.Fragment>
    <div className="flex flex-col  px-4">
      <div className="flex my-2 px-2 text-xl border-b py-2 font-bold ">
        Today's Menu
        </div>
      <div className="flex my-2 flex-row ">

        <div className="flex flex-col  shadow-lg  text-center">

          <div className="text-base px-2">
            <img src="/images/items/11.jpg" />
          </div>
          <div className="text-sm md:text-base p-1">
            Breakfast
            </div>
        </div>

        <div className="flex flex-col  shadow-lg  text-center">

          <div className="text-base px-2">
            <img src="/images/items/14.jpg" />
          </div>
          <div className="text-sm md:text-base p-1">
            Lunch
            </div>
        </div>

        <div className="flex flex-col    shadow-lg  text-center ">

          <div className="text-base px-2">
            <img src="/images/items/13.jpg" />
          </div>
          <div className="text-sm md:text-base p-1">
            Dinner
            </div>
        </div>






      </div>
    </div>
  </React.Fragment>
}