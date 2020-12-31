import React from 'react'

interface Props {
    fill?: any
    stroke?: any
    size?: any
    strokeWidth?: any
}

const EditSvg = ({ fill, size, stroke, strokeWidth }: Props) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-edit" width={size ? size : 24} height={size ? size : 24}
                viewBox="0 0 24 24" strokeWidth={strokeWidth ? strokeWidth : '1.0'} stroke={stroke ? stroke : "#ddd"} fill={fill ? fill : "none"} strokeLinecap="round" strokeLinejoin="round">
          
          
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                <line x1="16" y1="5" x2="19" y2="8" />
          
          
            </svg>
        </div >
    )
}

export default EditSvg
