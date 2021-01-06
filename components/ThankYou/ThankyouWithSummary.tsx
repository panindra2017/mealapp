import React from 'react'

interface Props {
    
}

const ThankyouWithSummary = (props: Props) => {
    return (
        <div className="bg-gray-300">
            <div className="w-full flex-1">
                <img src="/images/thankyou.jpg" style={{width:'100%'}} />
            </div>
            <div className="w-full flex-1 py-4 text-center text-base">
                Thank You For Your Subscription
            </div>
            <div className=" flex-1 py-2  text-center  text-xs px-8 pb-8 text-ju">
               Please check your mail box for   delivery and subcsription details
            </div>
        </div>
    )
}

export default ThankyouWithSummary
