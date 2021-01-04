import React from 'react'
import SinginComponent from '../components/Signin/SinginComponent'
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
