import React from 'react'


const ContactForm = () => {
    return (<div className="flex flex-col px-2 shadow-lg ">
        <div className="flex-1  flex flex-col my-2 text-xl">
            <div className=" px-2 border-b">Customer Details  </div>
        </div>
        <div className="flex-1  flex flex-col py-4 px-1 ">
            <div className="flex my-2">
                <div className="px-2"> Fullname : </div>  <div className=" mx-2"><input className="border-b " /></div></div>
            <div className="flex my-2">
                <div className="px-2"> Email Id : </div>  <div className=" mx-2"><input className="border-b " /></div></div>
            <div className="flex  my-2">
                <div className="px-2"> Mobile No : </div>  <div className=" mx-2"><input className="border-b " /></div></div>

        </div>



    </div>
    )
}

export default ContactForm
