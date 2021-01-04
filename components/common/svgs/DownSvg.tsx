import React from 'react'

interface Props {
    fill?: any
    stroke?: any
    size?: any
    strokeWidth?: any
}

const DownSvg = ({ fill, size, stroke, strokeWidth }: Props) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-edit" width={size ? size : 24} height={size ? size : 24}
                viewBox="0 0 24 24" strokeWidth={strokeWidth ? strokeWidth : '1.0'} stroke={stroke ? stroke : "#ddd"} fill={fill ? fill : "none"} strokeLinecap="round" strokeLinejoin="round">

                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 15l-6 -6l-6 6h12" transform="rotate(180 12 12)" />

            </svg>
        </div >
    )
}

export default DownSvg
