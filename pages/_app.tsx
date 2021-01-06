
// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/globals.css'
import 'react-multi-carousel/lib/styles.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime/css/react-datetime.css";
import { CookiesProvider } from "react-cookie"
import CartContextProvider from '../components/Cart/CartContextProvider';
import React from 'react';
import AuthenticationProvider from '../components/authentication/AuthenticationProvider';
import PageStateManager from '../components/PageContextManager';
function MyApp({ Component, pageProps }: AppProps) {
  return <CookiesProvider> <PageStateManager>
    <AuthenticationProvider>
      <CartContextProvider> <Component {...pageProps} /></CartContextProvider></AuthenticationProvider></PageStateManager></CookiesProvider>
}



export default MyApp