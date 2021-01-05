import React from 'react'
import SinginComponent from '../components/Signin/SinginComponent'
import { AppLayout } from '../layout/AppLayout'

export default function SigninPage() {

  return (
    <AppLayout><div className="">

      <div className="flex w-full px-4 my-4">
        <SinginComponent  />
      </div>
    </div>
    </AppLayout>

  )
}
