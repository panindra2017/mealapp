import React from 'react'


const AddressForm = () => {
    return (<div className="flex flex-col px-2 shadow-lg ">
        <div className="flex-1  flex flex-col my-2 text-xl">
            <div className=" px-2 border-b">Delivery Address Details  </div>
        </div>
        <div className="flex-1  flex flex-col py-4 px-1 ">
            <div className="flex my-2">
                <div className="px-2"> House No: </div>  <div className=" mx-2"><input className="border-b " /></div></div>
            <div className="flex my-2">
                <div className="px-2"> Street:  </div>  <div className=" mx-2"><input className="border-b " /></div></div>
            <div className="flex  my-2">
                <div className="px-2"> Area: </div>  <div className=" mx-2"><input className="border-b " /></div></div>
            <div className="flex  my-2">
                <div className="px-2"> City: </div>  <div className=" mx-2"><input className="border-b " /></div></div>
            <div className="flex  my-2">
                <div className="px-2"> ZipCode: </div>  <div className=" mx-2"><input className="border-b " /></div></div>
            <div className="flex  my-2">
                <div className="px-2"> Landmark: </div>  <div className=" mx-2"><input className="border-b " /></div></div>

        </div>



    </div>
    )
}

export default AddressForm
