import React from 'react'

interface Props {

}

const Itemcard = (props: any) => {
    return (
        <div className={`flex items-center px-2 py-2 border-b pb-4 cursor-pointer  ${props.isNext && props.isNext ? 'bg-green-100' : ""}`}>
            <div><img src={props.images} style={{ width: "100px", height: "80px" }} /></div>
            <div className="flex flex-col px-4">

                <h1 className="text-sm font-semibold" >{props.name ? props.name : ""}</h1>
                <div className="flex-1 py-2 text-sm"> - {props.veg ? "Veg" : " "} Calories :  {props.calorie ? props.calorie : ""}</div>
                <div className="flex items-center">

                    <div className="text-sm">  <span className="px-4 uppercase text-sm">
                        {props.isNext && props.isNext ? 'Tomorrow' : props.serveOn}
                    </span>  </div> </div>
            </div>      </div>
    )
}

export default Itemcard
