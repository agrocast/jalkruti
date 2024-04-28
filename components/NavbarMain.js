import React, { useEffect, useState } from 'react';
import Logo from "../public/images/logo/SecondaryLogo_Coloured.png"
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from 'next/link'
import Image from 'next/image';

const NavbarMain = () => {
    const [isSticky, setSticky] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleLinkClick = () => {
        setShowMenu(false);
    };


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




    return (
        <>
            <div className={`navbar_main_container ${isSticky ? 'sticky' : ''}`} >


                <div className="container">
                    <div className='navbar_container'>

                        <div className="navbar__logo">
                            <Link href="/">
                                <Image src={Logo} alt="nav_logo" />
                            </Link>
                        </div>


                        <div className="navbar__toggle scrolled" onClick={handleToggle}>
                            {showMenu ? <FaTimes /> : <FaBars />}
                        </div>



                        <div className={`main_nav ${showMenu ? 'show' : ''}`}>
                            <div className="nav__content">

                                <div className='nav__list'>
                                    <Link className='nav__item'
                                        href="/" onClick={handleLinkClick}>
                                        Home
                                    </Link>

                                    <Link className='nav__item'
                                        href="/about" onClick={handleLinkClick}>
                                        About
                                    </Link>

                                    <Link className='nav__item'
                                        href="/services" onClick={handleLinkClick}>
                                        Services
                                    </Link>



                                    <Link className='nav__item'
                                        href="/contact" onClick={handleLinkClick}>
                                        Contact Us
                                    </Link>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}

export default NavbarMain
