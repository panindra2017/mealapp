import React from 'react'
import Carousel from 'react-multi-carousel';
const HomeSmallSlider = () => {
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
            partialVisibilityGutter: 60
        }
    }
    return (
        <div>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                partialVisible={true}
                customTransition="all .5"
                transitionDuration={10}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div className="mx-1"><img src="/images/banners/small-1.png" /></div>
                <div className="mx-1"><img src="/images/banners/small-2.png" /></div>
                <div className="mx-1"><img src="/images/banners/small-3.png" /></div>
            </Carousel>
        </div>
    )
}

export default HomeSmallSlider
