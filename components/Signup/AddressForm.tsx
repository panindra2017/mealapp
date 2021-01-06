import React from 'react'


const ContactForm = () => {
    return (<div className="flex flex-col  shadow-xl mx-4  ">
        <div className="flex-1  flex flex-col my-2  ">
            <div className=" px-2 border-b">Delivery Details  </div>
        </div>
        <div className="flex-1  flex flex-col py-4 px-1 ">
            <div className="flex my-2  items-center ">
                <div className="px-2 text-xs">House / No : </div>  <div className=""><input className="border-b " /></div></div>
                <div className="flex my-2  items-center ">
                <div className="px-2 text-xs"> Street / Road : </div>  <div className=""><input className="border-b " /></div></div>
        
                <div className="flex my-2  items-center ">
                <div className="px-2 text-xs"> City : </div>  <div className=""><input className="border-b " /></div></div>
                <div className="flex my-2  items-center ">
                <div className="px-2 text-xs"> Pincode : </div>  <div className=""><input className="border-b " /></div></div>
        </div>



    </div>
    )
}

export default ContactForm
