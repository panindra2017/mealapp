import React, { useEffect, useState } from 'react'
import { UserData } from '../../data/UserSubscriptionData';
import TickSvg from '../common/svgs/TickSvg';


const CustomerDeliveryAddresses = () => {
    const user = UserData;

    const [selectedAddres] = useState(0)


    useEffect(() => {

    }, [selectedAddres])

    useEffect(() => {

    }, [selectedAddres])
    return (

        <div className='flex-1 px-4'>
            <div className='flex my-2 px-4 py-1 font-bold'> Delivery Address   </div>
            <div className='flex  flex-col  py-1 '>
                <div className="flex  flex-col">{<DeliveryAddress data={user.deliveryAddress[0]} />}</div>
                <div className="flex  flex-col">{<DeliveryAddress data={user.deliveryAddress[1]} />}</div>
            </div>


        </div>

    )
}

export default CustomerDeliveryAddresses



const DeliveryAddress = ({ data }: any) => {



    return <React.Fragment>

        <div className='flex-1 flex flex-col px-4 py-1 shadow-xl my-4 text-xs'>
            <div className="flex border-b ">
                <div className="flex-1">{data.addrType}</div>
                <div className=" ">{data.selected ? <TickSvg stroke="green" strokeWidth={2} size={32} /> : <TickSvg stroke="gray" strokeWidth={0.5} size={32} />}</div></div>
            <div className="flex flex-col pb-2 ">
                <div className="pt-2  ">{data.add1} {data.add2}</div>
                <div className="pt-2  ">{data.city} {data.pincode}</div>
            </div>



        </div>
    </React.Fragment>
}