import React from 'react'


const SingInForm = () => {
    return (<div className="flex flex-col px-2 shadow-lg ">
        <div className="flex-1  flex flex-col my-2 text-xl">
            <div className=" px-2 border-b">Customer Details  </div>
        </div>
        <div className="flex-1  flex flex-col py-4 px-1 ">
            <div className="flex my-2">
                <div className="px-2"> Username : </div>  <div className=" mx-2"><input className="border-b " /></div></div>
            <div className="flex my-2">
                <div className="px-2"> Password : </div>  <div className=" mx-2"><input className="border-b " /></div></div>
            

        </div>



    </div>
    )
}

export default SingInForm
