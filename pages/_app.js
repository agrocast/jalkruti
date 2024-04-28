import '../styles/global.css';
import "../styles/bootstrap.min.css";
import "../styles/owl.carousel.min.css";
import "../styles/simple-scrollbar.css";
// import "../styles/odometer-theme-default.css";
// import "../styles/fontawesome.all.min.css";
import "../styles/style.css";

import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Navbar from '../components/MainNavbar';


// import '@fontsource-variable/inter';
import '@fontsource-variable/raleway';
import NavbarMain from '../components/NavbarMain';



function MyApp({ Component, pageProps }) {
  return(
    <>
      {/* <Navbar /> */}

      <NavbarMain/>

    <Component {...pageProps} />

    <ScrollToTopButton />
    <Footer/>

    </>
  ) 
}

export default MyApp
