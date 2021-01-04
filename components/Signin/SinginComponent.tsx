import React from 'react'
import SingInForm from './SinginForm'

interface Props {
    
}

const SinginComponent = (props: Props) => {
    return (
        <div>
             <div className="flex flex-row  my-4">
                    <SingInForm />
                </div>
        </div>
    )
}

export default SinginComponent
