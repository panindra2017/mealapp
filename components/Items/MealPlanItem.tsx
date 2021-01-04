import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react'

interface Props {
    id: any
    name?: any
    price?: any
    veg?: boolean
    images?: any
}

const MealPlanItem = (props: Props) => {

    const router = useRouter();
    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <div className="flex flex-col   justify-center  my-2" onClick={(e: any) => { router.push(`/detail?mealid=${props.id}`) }}>
            <figure className="relative max-w-xs cursor-pointer">
                <img className="rounded-lg shadow-xl hover:shadow-2xl" src={props.images} />
                <figcaption className="absolute text-lg -mt-16 text-white px-4">
                    {/*   <div>
                        <h1 className="text-sm">{props.name}</h1>
                    </div>
                    <div>
                        <span className="text-xs">{props.veg === true ? 'Veg' : "Non Veg"}</span>
                    </div> */}
                    <div>
                        <span className="text-xs">{props.veg === true ? 'Veg' : "Non Veg"}</span>
                    </div>
                </figcaption>
            </figure>
            <div className="flex flex-col py-2 px-1">
                <h1 className="text-base">{props.name}</h1>
                <h1 className="text-sm">{props.price ? props.price : ""}</h1>
            </div>

        </div>
    )
}

export default MealPlanItem
