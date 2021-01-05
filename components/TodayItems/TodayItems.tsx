import React from 'react'
import Carousel from 'react-multi-carousel';
const TodayItems = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2,
            partialVisibilityGutter: 40
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            partialVisibilityGutter: 40
        }
    }
    return (
        <div className="w-full">
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={10}
                containerClass="carousel-container flex"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                <TodayItem image={"/images/items/14.jpg"} type="Breakfast" />

                <TodayItem image={"/images/items/16.jpg"} type="Lunch" />

                <TodayItem image={"/images/items/15.jpg"} type="Dinner" />

            </Carousel>
        </div>
    )
}

export default TodayItems



const TodayItem = (data: any) => {


    return <React.Fragment>
        <div className="shadow-xl px-2 py-2">
            <div className="text-base px-2 ">
                <img src={data.image} />
            </div>
            <div className="text-sm md:text-base px-4 py-2">
                {data.type}
            </div>
        </div>
    </React.Fragment>
}