export const mealplans = [{
    id: 1,
    planType: "Breakfast",
    name: "Power Breankfast ",
    veg: true,
    images: "/images/mealplan/breakfast/power-breakfast-veg.jpg",
    price: "Rs. 499",
    duration: "",
    description: "Wakey wakey, eggs & bakey! Kickstart your day with a protein-fuelled breakfast and a healthy side of carbs. Quesadillas, Bhurji, French Toast. We serve our eggs up in many exciting ways.",
    items: [{

        id: 11,
        name: "Bakery and Bread.",
        calorie: "640",
        veg: true,
        images: "/images/items/11.jpg",
        serveOn: "monday",
        isNext: true
    }, {

        id: 12,
        name: "Cereals and Breakfast Foods.",
        calorie: "452",
        veg: true,
        images: "/images/items/12.jpg",
        serveOn: "tuesday"
    },
    {

        id: 13,
        name: "Soups and Canned Goods.",
        calorie: "380",
        veg: true,
        images: "/images/items/13.jpg",
        serveOn: "wedness day"
    }, {

        id: 14,
        name: "Frozen Foods.",
        calorie: "220",
        veg: true,
        images: "/images/items/14.jpg",
        serveOn: "thursday"
    },
    {

        id: 15,
        name: "Instant Pot Hummus",
        calorie: "584",
        veg: true,
        images: "/images/items/15.jpg",
        serveOn: "friday"
    }, {

        id: 16,
        name: "Chilli con carne recipe",
        calorie: "1100",
        veg: true,
        images: "/images/items/16.jpg",
        serveOn: "saturday"
    },
    {

        id: 17,
        name: "",
        calorie: "",
        veg: true,
        images: "/images/mealplan/power-breakfast-veg.jpg",
        serveOn: "sunday"
    }],
    plans: [
        {
            subscribeId: 1001,
            name: "Trail",
            duration: "7 Days",
            price: "199",
            discount: "FREE"

        },
        {
            subscribeId: 1002,
            name: "Weekly",
            duration: "7 Days",
            price: "499",
            discount: "499"

        },
        {
            subscribeId: 1003,
            name: "Monthly",
            duration: "30 Days",
            price: "1499",
            discount: "1299"

        }
    ]
}, {
    id: 2,
    planType: "Breakfast",
    name: "Corn Fed Chicken",
    veg: false,
    images: "/images/mealplan/breakfast/power-breakfast-noveg.jpg",
    price: "Rs. 899",
    duration: "",
    subscriptionPlan: [{
        id: 1004,
        duration: "7 days",
        days: 7,
        title: "One Week",
        price: 1400,
        salePrice: 1200

    }],
    description: "Want a meal that's nutritious yet light on your stomach? This thali of egg curry, soft whole wheat parathas, cucumber carrot salad and crunchy sirka onions is not only packed with nutrients but also with deliciousness.",
    items: [{

        id: 21,
        name: "Bakery and Bread.",
        calorie: "640",
        veg: true,
        images: "/images/items/11.jpg",
        serveOn: "monday",
        isNext: true
    }, {

        id: 22,
        name: "Cereals and Breakfast Foods.",
        calorie: "452",
        veg: true,
        images: "/images/items/12.jpg",
        serveOn: "tuesday"
    },
    {

        id: 23,
        name: "Soups and Canned Goods.",
        calorie: "380",
        veg: true,
        images: "/images/items/13.jpg",
        serveOn: "wedness day"
    }, {

        id: 24,
        name: "Frozen Foods.",
        calorie: "220",
        veg: true,
        images: "/images/items/14.jpg",
        serveOn: "thursday"
    },
    {

        id: 25,
        name: "Instant Pot Hummus",
        calorie: "584",
        veg: true,
        images: "/images/items/15.jpg",
        serveOn: "friday"
    }, {

        id: 26,
        name: "Chilli con carne recipe",
        calorie: "1100",
        veg: true,
        images: "/images/items/16.jpg",
        serveOn: "saturday"
    },
    {

        id: 27,
        name: "",
        calorie: "",
        veg: true,
        images: "/images/mealplan/power-breakfast-veg.jpg",
        serveOn: "sunday"
    }], plans: [
        {
            subscribeId: 2001,
            name: "Trail",
            duration: "7 Days",
            price: "0",
            discount: "02"

        },
        {
            subscribeId: 2002,
            name: "Weekly",
            duration: "7 Days",
            price: "499",
            discount: "499"
        },
        {
            subscribeId: 2003,
            name: "Monthly",
            duration: "30 Days",
            price: "1499",
            discount: "1299"
        }
    ]
},
{
    id: 3,
    planType: "Breakfast",
    name: "Diet Meal Plan",
    veg: true,
    images: "/images/mealplan/breakfast/weight-wise.jpg",
    price: "Rs. 1299",
    duration: "",
    description: "Want a meal that's nutritious yet light on your stomach? This thali of egg curry, soft whole wheat parathas, cucumber carrot salad and crunchy sirka onions is not only packed with nutrients but also with deliciousness.",
    plans: [
        {
            subscribeId: 3001,
            name: "Trail",
            duration: "7 Days",
            price: "0",
            discount: "02"
        },
        {
            subscribeId: 3002,
            name: "Weekly",
            duration: "7 Days",
            price: "499",
            discount: "499"
        },
        {
            subscribeId: 3003,
            name: "Monthly",
            duration: "30 Days",
            price: "1499",
            discount: "1299"

        }
    ]
},
{
    id: 4,
    planType: "Breakfast",
    name: "Weight Wise Salad ",
    veg: false,
    images: "/images/mealplan/breakfast/weight-wise-salad.jpg",
    price: "Rs. 599",
    duration: "",
    description: "Want a meal that's nutritious yet light on your stomach? This thali of egg curry, soft whole wheat parathas, cucumber carrot salad and crunchy sirka onions is not only packed with nutrients but also with deliciousness.",
    plans: [
        {
            subscribeId: 4001,
            name: "Trail",
            duration: "7 Days",
            price: "0",
            discount: "02"

        },
        {
            subscribeId: 4002,
            name: "Weekly",
            duration: "7 Days",
            price: "499",
            discount: "499"

        },
        {
            subscribeId: 4003,
            name: "Monthly",
            duration: "30 Days",
            price: "1499",
            discount: "1299"

        }
    ]
},
{
    id: 5,
    planType: "Lunch",
    name: "All Stars",
    veg: true,
    images: "/images/mealplan/lunch/1.jpg",
    price: "",
    duration: "",
    description: "Want a meal that's nutritious yet light on your stomach? This thali of egg curry, soft whole wheat parathas, cucumber carrot salad and crunchy sirka onions is not only packed with nutrients but also with deliciousness.",
    plans: [
        {
            subscribeId: 5001,
            name: "Trail",
            duration: "7 Days",
            price: "0",
            discount: "02"

        },
        {
            subscribeId: 5002,
            name: "Weekly",
            duration: "7 Days",
            price: "499",
            discount: "499"

        },
        {
            subscribeId: 5003,
            name: "Monthly",
            duration: "30 Days",
            price: "1499",
            discount: "1299"

        }
    ]
}, {
    id: 6,
    planType: "Lunch",
    name: "All Stars",
    veg: false,
    images: "/images/mealplan/lunch/2.jpg",
    price: "",
    duration: "",
    description: "Want a meal that's nutritious yet light on your stomach? This thali of egg curry, soft whole wheat parathas, cucumber carrot salad and crunchy sirka onions is not only packed with nutrients but also with deliciousness.",
    plans: [
        {
            subscribeId: 6001,
            name: "Trail",
            duration: "7 Days",
            price: "0",
            discount: "02"

        },
        {
            subscribeId: 6002,
            name: "Weekly",
            duration: "7 Days",
            price: "499",
            discount: "499"

        },
        {
            subscribeId: 6003,
            name: "Monthly",
            duration: "30 Days",
            price: "1499",
            discount: "1299"

        }
    ]
},
{
    id: 7,
    planType: "Lunch",
    name: "Indian Thali",
    veg: true,
    images: "/images/mealplan/lunch/7.jpg",
    price: "",
    duration: "",
    description: "Want a meal that's nutritious yet light on your stomach? This thali of egg curry, soft whole wheat parathas, cucumber carrot salad and crunchy sirka onions is not only packed with nutrients but also with deliciousness.",
    plans: [
        {
            subscribeId: 7001,
            name: "Trail",
            duration: "7 Days",
            price: "0",
            discount: "02"

        },
        {
            subscribeId: 7002,
            name: "Weekly",
            duration: "7 Days",
            price: "499",
            discount: "499"

        },
        {
            subscribeId: 7003,
            name: "Monthly",
            duration: "30 Days",
            price: "1499",
            discount: "1299"

        }
    ]
},
{
    id: 8,
    planType: "Lunch",
    name: "Indian Thali",
    veg: false,
    images: "/images/mealplan/lunch/8.jpg",
    price: "",
    duration: "",
    description: "Want something new every day? Make way for the All Stars! Curated by our chef from across the menu, you can go from an Indian thali one day to a gourmet Buddha Bowl the next. What's more? You also have an unlimited option to swap between your All Star meals for free..",
    plans: [
        {
            subscribeId: 8001,
            name: "Trail",
            duration: "7 Days",
            price: "0",
            discount: "02"

        },
        {
            subscribeId: 8002,
            name: "Weekly",
            duration: "7 Days",
            price: "499",
            discount: "499"

        },
        {
            subscribeId: 8003,
            name: "Monthly",
            duration: "30 Days",
            price: "1499",
            discount: "1299"

        }
    ]
},
    ,
{
    id: 9,
    planType: "Dinner",
    name: "Dinner Delight",
    veg: true,
    images: "/images/mealplan/power-breakfast-non-veg.jpg",
    price: "",
    duration: "",
    description: "Want a meal that's nutritious yet light on your stomach? This thali of egg curry, soft whole wheat parathas, cucumber carrot salad and crunchy sirka onions is not only packed with nutrients but also with deliciousness.",
    plans: [
        {
            subscribeId: 9001,
            name: "Trail",
            duration: "7 Days",
            price: "0",
            discount: "02"

        },
        {
            subscribeId: 9002,
            name: "Weekly",
            duration: "7 Days",
            price: "499",
            discount: "499"

        },
        {
            subscribeId: 9003,
            name: "Monthly",
            duration: "30 Days",
            price: "1499",
            discount: "1299"

        }
    ]
}, {
    id: 10,
    planType: "Dinner",
    name: "Dinner Delight",
    veg: false,
    images: "/images/mealplan/power-breakfast-non-veg.jpg",
    price: "",
    duration: "",
    description: "Want a meal that's nutritious yet light on your stomach? This thali of egg curry, soft whole wheat parathas, cucumber carrot salad and crunchy sirka onions is not only packed with nutrients but also with deliciousness.",
    plans: [
        {
            subscribeId: 10001,
            name: "Trail",
            duration: "7 Days",
            price: "0",
            discount: "02"

        },
        {
            subscribeId: 10002,
            name: "Weekly",
            duration: "7 Days",
            price: "499",
            discount: "499"

        },
        {
            subscribeId: 10003,
            name: "Monthly",
            duration: "30 Days",
            price: "1499",
            discount: "1299"

        }
    ]
},
{
    id: 11,
    planType: "Dinner",
    name: "Fit Curries Thali",
    veg: true,
    images: "/images/mealplan/power-breakfast-non-veg.jpg",
    price: "",
    duration: "",
    description: "Want a meal that's nutritious yet light on your stomach? This thali of egg curry, soft whole wheat parathas, cucumber carrot salad and crunchy sirka onions is not only packed with nutrients but also with deliciousness.",
    plans: [
        {
            subscribeId: 11001,
            name: "Trail",
            duration: "7 Days",
            price: "0",
            discount: "02"

        },
        {
            subscribeId: 11002,
            name: "Weekly",
            duration: "7 Days",
            price: "499",
            discount: "499"

        },
        {
            subscribeId: 11003,
            name: "Monthly",
            duration: "30 Days",
            price: "1499",
            discount: "1299"

        }
    ]
},
{
    id: 12,
    planType: "Dinner",
    name: "Fit Curries Thali",
    veg: false,
    images: "/images/mealplan/power-breakfast-non-veg.jpg",
    price: "",
    duration: "",
    description: "Want a meal that's nutritious yet light on your stomach? This thali of egg curry, soft whole wheat parathas, cucumber carrot salad and crunchy sirka onions is not only packed with nutrients but also with deliciousness.",
    plans: [
        {
            subscribeId: 12001,
            name: "Trail",
            duration: "7 Days",
            price: "0",
            discount: "02"

        },
        {
            subscribeId: 12002,
            name: "Weekly",
            duration: "7 Days",
            price: "499",
            discount: "499"

        },
        {
            subscribeId: 12003,
            name: "Monthly",
            duration: "30 Days",
            price: "1499",
            discount: "1299"

        }
    ]
}]