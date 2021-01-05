import { useRouter } from 'next/dist/client/router';
import React from 'react'
import SinginComponent from '../components/Signin/SinginComponent'
import { UserData } from '../data/UserSubscriptionData';
import { AppLayout } from '../layout/AppLayout'

export default function SigninPage() {
  const router = useRouter();

  function onSignin(data: any) {

    const _username = UserData.username;
    const _password = UserData.password;
    if (data.username === _username && data.password === _password) {
      router.push(`/dashboard`)
    }
    else {

      alert("please check your details")
    }

  }
  return (
    <AppLayout><div className="">

      <div className="flex w-full px-4 my-4">
        <SinginComponent onSignin={(data: any) => { onSignin(data) }} />
      </div>
    </div>
    </AppLayout>

  )
}
