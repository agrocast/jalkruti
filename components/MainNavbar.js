"use client"
import React, { useState, useEffect } from 'react';
import Logo from "../public/images/logo/SecondaryLogo_Coloured.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setSticky(scrollTop > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleToggle = () => {
    setShowMenu(!showMenu);
  };



  return (
    // <header className="site-header default-header-style">
    // 
    <header className={`site-header default-header-style ${isSticky ? 'sticky' : ''} ${showMenu ? 'sidemenu-active' : ''}`}>

      {/* <header className={`site-header default-header-style ${isSticky ? 'sticky' : ''}`}> */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="navigation-area">

              <div className="site-branding">
                <Link href="/" >
                  <Image src={Logo} alt="Site Logo" />
                </Link>
              </div>


              <div className="site-navigation">
                <nav className="navigation">

                  <div className="menu-wrapper">
                    <div className="menu-content">
                      <ul className="mainmenu">
                        <li>
                          <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/about">About</Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/services">Services</Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/contact">Contact Us</Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </nav>
              </div>

              <div className="navbar__toggle scrolled" onClick={handleToggle}>
                {showMenu ? <FaTimes /> : <FaBars />}
              </div>




            </div>
          </div>
        </div>
      </div>

      <div className="mobile-sidebar-menu  sidebar-menu">
        <div className="overlaybg" onClick={handleToggle}></div>
      </div>
    </header>
  )
}

export default Navbar