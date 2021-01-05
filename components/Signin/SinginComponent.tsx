import { useRouter } from 'next/dist/client/router';
import React, { useContext } from 'react'
import { UserData } from '../../data/UserSubscriptionData';
import { AuthenticationContext } from '../authentication/AuthenticationProvider';
import SingInForm from './SinginForm'

interface Props {

}

const SinginComponent = () => {

    const router = useRouter();
    const { user, isSingIn,signIn } = useContext(AuthenticationContext)
    function onSignin(data: any) {
  
      const _username = UserData.username;
      const _password = UserData.password;
      if (data.username === _username && data.password === _password) {
        signIn({})
      }
      else {
  
        alert("please check your details")
      }
  
    }
    return (
        <React.Fragment>  <SingInForm onSignin={onSignin} /></React.Fragment>)



}

export default SinginComponent
