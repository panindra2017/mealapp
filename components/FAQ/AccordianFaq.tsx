import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';



const AccordianFaq = (props: any) => {

    const [curtab, setcurtab] = useState(1)
    return (
        <div className="flex flex-col bg-gray-50">

            <div className="px-4 flex-col">
                <div className="flex border-b"> <div className="text-base py-2 flex-1"> What are Mealbox subscriptions? </div> <div className="">  <button> X</button> </div> </div>
                <div className="flex text-xs p-2 text-justify"> Tired of scanning menus every day to decide what to order? Can’t deal with the hassle of grocery shopping & cooking at the end of a tiring day? An eat.fit subscription is just the thing for you.You can subscribe to one or more meals including breakfast, lunch, snacks & dinner. Once you subscribe, we take care of that meal for you every day! Yes, every single day until the end of your subscription. You can also set up your subscription to renew automatically with credit/ debt cards.  </div>
            </div>
          
            <div className="px-4 flex-col">
                <div className="flex border-b"> <div className="text-base py-2 flex-1"> What are the benefits of an eat.fit subscription?</div> <div className="">  <button> X</button> </div> </div>
                <div className="flex text-xs p-2 text-justify">With an eat.fit subscription, you can spare the daily hassle of ordering meals, doing the dishes, shopping grocery, and what not! We also keep changing our menu so you don’t get bored of eating the same thing every day. Your subscription will make life easier in more than one way: Add items to your meal at no extra delivery fee Add any item/s to your upcoming meal at no additional delivery fee.  Try something new, if you need a change Explore different flavors from a wide range of healthy, tasty dishes. Change to a meal of your choice, any day! Cancel your meal Change of plans? No problem. Cancel your meal and get a full refund. No questions asked.  If you have an auto renewal subscription, this amount gets adjusted with the next subscription. If you do not have an auto-renewal subscription, the amount will get refunded at the end of your subscription. </div>
            </div>
            <div className="px-4 flex-col">
                <div className="flex border-b"> <div className="text-base py-2 flex-1">How can I change my upcoming subscription meal?</div> <div className="">  <button> X</button> </div> </div>
                <div className="flex text-xs p-2 text-justify"> In the mood to try something different today? We’ve got you covered. Change your upcoming meal by following these steps: Go to Plan Tap My Packs Pick your eat.fit subscription Scroll down to the upcoming meals Go to the me and tap Change/Add items Pick the item you like  Pay any additional amount if applicable, and wait for the meal to arrive at your doorstep!  In case any refunds are due, those will be adjusted/ refunded to you at the end of your subscription cycle.   </div>
            </div>
            <div className="px-4 flex-col">
                <div className="flex border-b"> <div className="text-base py-2 flex-1"> What are Mealbox subscriptions? </div> <div className="">  <button> X</button> </div> </div>
                <div className="flex text-xs p-2 text-justify"> Tired of scanning menus every day to decide what to order? Can’t deal with the hassle of grocery shopping & cooking at the end of a tiring day? An eat.fit subscription is just the thing for you.You can subscribe to one or more meals including breakfast, lunch, snacks & dinner. Once you subscribe, we take care of that meal for you every day! Yes, every single day until the end of your subscription. You can also set up your subscription to renew automatically with credit/ debt cards.  </div>
            </div>
            <div className="px-4 flex-col">
                <div className="flex border-b"> <div className="text-base py-2 flex-1"> What are Mealbox subscriptions? </div> <div className="">  <button> X</button> </div> </div>
                <div className="flex text-xs p-2 text-justify"> Tired of scanning menus every day to decide what to order? Can’t deal with the hassle of grocery shopping & cooking at the end of a tiring day? An eat.fit subscription is just the thing for you.You can subscribe to one or more meals including breakfast, lunch, snacks & dinner. Once you subscribe, we take care of that meal for you every day! Yes, every single day until the end of your subscription. You can also set up your subscription to renew automatically with credit/ debt cards.  </div>
            </div>
        </div>
    )



}

export default AccordianFaq
