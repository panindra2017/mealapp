import React from 'react'
import CustomerProfile from '../components/CustomerProfile/CustomerProfile'
import { AppLayout } from '../layout/AppLayout'
import _ from 'lodash';
import Head from 'next/head'
import CustomerDeliveryAddresses from '../components/CustomerProfile/CustomerDeliveryAddresses';
import TodayItems from '../components/TodayItems/TodayItems';
import NutritionTab from '../components/DashboardComponents/NutritionTab';
import { AuthenticationContext } from '../components/authentication/AuthenticationProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import SinginComponent from '../components/Signin/SinginComponent';


export default function Dashboard() {
  const { user, isSingIn } = useContext(AuthenticationContext)

  const router = useRouter();
  useEffect(() => {
    if (user === null || isSingIn === false || user === undefined) {

    }
  }, [user])

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

      {!user && <SinginComponent />}
      {user !== null && isSingIn !== false && user !== undefined &&
        <div className="flex flex-col">

          <div className=" flex-1 ">
            <CustomerProfile user={user} />
          </div>
          <div className=" flex-1 ">
            <TodayMenu user={user} />
          </div>
          <div className=" flex-1 ">
            <CustomerDeliveryAddresses user={user} />
          </div>
          <div className=" flex-1 my-4">
            <NutritionTab user={user} />
          </div>

        </div>}</AppLayout>

  )
}


const TodayMenu = ({ user }: any) => {

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

