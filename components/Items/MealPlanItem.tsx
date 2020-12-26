import React, { useEffect } from 'react'

interface Props {
    name?: any
    price?: any
    veg?: boolean
    images?: any
}

const MealPlanItem = (props: Props) => {


    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <div className="flex items-center justify-center  my-2">
            <figure className="relative max-w-xs cursor-pointer">
                <img className="rounded-lg shadow-xl hover:shadow-2xl" src={props.images} />
                <figcaption className="absolute text-lg -mt-16 text-white px-4">
                    <div>
                        <h1 className="text-base">{props.name}</h1>
                    </div>
                    <div>
                        <span>{props.veg === true ? 'Veg' : "Non Veg"}</span>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}

export default MealPlanItem
