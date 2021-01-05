import React from 'react'
import SingInForm from './SinginForm'

interface Props {
    
}

const SinginComponent = ({onSignin}: any) => {
    return (
        <React.Fragment>  <SingInForm onSignin={onSignin}/></React.Fragment>)
        
                  
        
}

export default SinginComponent
