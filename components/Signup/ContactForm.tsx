import React from 'react'


const ContactForm = () => {
    return (<div className="flex flex-col px-2  shadow-xl mx-4 ">
        <div className="flex-1  flex flex-col my-2  ">
            <div className=" px-2 border-b">Customer Details  </div>
        </div>
        <div className="flex-1  flex flex-col py-4 px-1 ">
            <div className="flex my-2  items-center ">
                <div className="px-2 text-xs"> Fullname : </div>  <div className=""><input className="border-b " /></div></div>
                <div className="flex my-2  items-center ">
                <div className="px-2 text-xs"> Email : </div>  <div className=""><input className="border-b " /></div></div>
        
                <div className="flex my-2  items-center ">
                <div className="px-2 text-xs"> Mobile : </div>  <div className=""><input className="border-b " /></div></div>
        
        </div>



    </div>
    )
}

export default ContactForm
