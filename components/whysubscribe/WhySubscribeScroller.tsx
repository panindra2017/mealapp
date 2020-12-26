import React from 'react'
import Carousel from 'react-multi-carousel';
import MealPlanItem from '../Items/MealPlanItem';

interface Props {

}

const WhySubscribeScroller = (props: Props) => {


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
            items: 1,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 40
        }
    }





    return (
        <div>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                /*    ssr={true} // means to render carousel on server-side. */
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={10}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                /*   deviceType={this.props.deviceType} */
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div><MealPlanItem /></div>
                <div><MealPlanItem/></div>

                <div><MealPlanItem/></div>
            </Carousel>
        </div>
    )
}

export default WhySubscribeScroller


const SubscribeItem = () => {


    return <div className="flex ">


    </div>

}