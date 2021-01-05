import React, { useState } from 'react'


const SingInForm = ({ onSignin }: any) => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    return (<div className="w-full flex flex-col  shadow-lg  mb-32  ">
        <div className=" flex flex-col my-2 text-xl ">
            <div className=" border-b py-4 text-center">
                Customer Login  </div>
        </div>
        <div className=" flex flex-col py-4 px-1 ">
            <div className="flex my-4">
                <div className="px-2"> Username : </div>  <div className=" mx-2 flex-1"><input className="border-b-2 py-1 px-4 w-full" 
                
                onChange={(e:any)=>{setusername(e.target.value)}}/></div></div>
            <div className="flex my-4">
                <div className="px-2"> Password : </div>  <div className="mx-2 flex-1"><input className="border-b-2 py-1 px-4 w-full 
                
                " onChange={(e:any)=>{setpassword(e.target.value)}} type="password" /></div></div>
            <div className="flex flex-wrap my-4 ">
                <button className="flex-1 py-2 bg-gray-800 text-white px-16   w-full " onClick={(e: any) => { onSignin({ username, password }) }}>Login Now </button>
            </div>


        </div>



    </div>
    )
}

export default SingInForm
