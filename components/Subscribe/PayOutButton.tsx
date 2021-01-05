import React from 'react'

interface Props {

}

const PayoutButton = (props: any) => {


    return (
        <div className="flex flex-wrap ">
            <button className="flex-1 py-2 bg-gray-800 text-white px-16 rounded-xl w-full " onClick={(e: any) => { props.onSubmit(e) }}>PayNow </button>
        </div>
    )
}

export default PayoutButton
