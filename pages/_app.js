import '../styles/global.css';
import "../styles/bootstrap.min.css";
import "../styles/style.css";

import ScrollToTopButton from '../components/ScrollToTopButton';

import NavbarMain from '../components/NavbarMain';
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    AOS.init()
 }, [])

  return (
    <>
      <NavbarMain />
      <Component {...pageProps} />
      <ScrollToTopButton />
 
    </>
  )
}

export default MyApp
