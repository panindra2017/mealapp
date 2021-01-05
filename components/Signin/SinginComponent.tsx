import React from 'react'
import SingInForm from './SinginForm'

interface Props {
    
}

const SinginComponent = ({onSignin}: any) => {
    return (
        <div>
             <div className="flex flex-row  my-4">
                    <SingInForm onSignin={onSignin}/>
                </div>
        </div>
    )
}

export default SinginComponent
