import React from 'react'

interface Props {

}

const Howitwork = (props: Props) => {
    return (
        <div className="flex flex-col ">
            <div className="flex text-xl font-bold border-b border-red-800 py-2">
                How It Works
            </div>
            <div className="flex  flex-col">
                <div className="flex py-2 items-center">
                    <div className="w-16"><img src="/images/howitwork/1.png" /> </div>     <div className="text-xs flex-1 text-left">Meals are delivered every day at the chosen address and time</div>
                </div>
                <div className="flex py-2 items-center">
                    <div className="w-16"> <img src="/images/howitwork/2.png" /></div>     <div className="text-xs flex-1 text-left">Full flexibility to change meals, delivery address, time and even cancel meals for the day</div>
                </div>
                <div className="flex py-2 items-center">
                    <div className="w-16"> <img src="/images/howitwork/3.png" /></div>     <div className="text-xs flex-1 text-left">Get a full refund for any meals you cancel. Refunds are credited to your account at the end of the cycle or adjusted against your next billing cycle</div>
                </div>
                <div className="flex py-2 items-center">
                    <div className="w-16"><img src="/images/howitwork/4.png" /> </div>     <div className="text-xs flex-1 text-left">You can auto-renew subscriptions and get the best price per meal. Subscriptions renew on the same day of every week/month from the start date</div>
                </div></div>
        </div>
    )
}

export default Howitwork
