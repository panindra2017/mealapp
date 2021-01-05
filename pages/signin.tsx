import { useRouter } from 'next/dist/client/router';
import React from 'react'
import SinginComponent from '../components/Signin/SinginComponent'
import { AppLayout } from '../layout/AppLayout'


export default function SigninPage() {
  const router = useRouter();

  function onSignin(data:any){

   
      if (data !== null) {
          router.push(`/dashboard`)
      }
 
  }
  return (
    <AppLayout><div className="flex flex-col">

      <div className="flex">
        <SinginComponent  onSignin={(e:any)=>{onSignin()}}/>
      </div>
      </div>
     </AppLayout>

  )
}
