import React from 'react'

interface Props {

}

const Itemcard = (props: Props) => {
    return (
        <div className="flex items-center px-2 border-b pb-4 cursor-pointer focus:bg-gray-100">
            <div><img src="/images/items/item-1.jpg" style={{ width: "100px", height: "100px" }} /></div>
            <div className="flex flex-col px-4">

                <h1 className="text-base font-semibold" > Idli Sambar Wiht Cutney</h1>
                <div className="flex-1 py-2 text-sm"> 628 Cal, Vegan</div>
            <div className="flex items-center">  <div className="flex-1 t">Rs 99 </div>  <div className=""><button className="text-sm border p-1 rounded bg-gray-50">Add To Cart</button> </div> </div>
            </div>      </div>
    )
}

export default Itemcard
