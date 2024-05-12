import React from 'react'
// import Logo from "../public/imgs/PrimaryLogo_Coloured.png"
import Logo from "../public/images/logo/SecondaryLogo_Coloured.jpg"
import Image from 'next/image'
import Link from 'next/link'

const PagesNavbar = () => {
    return (
        <header className="site-header header-style-one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="navigation-area">

                            <div className="site-branding">
                                <Link href="/" style={{ height: "45px" }}>
                                    <Image src={Logo} alt="Site Logo" style={{ width: "100%", height: "100%" }} />
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
                            <div className="hamburger-menus">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-sidebar-menu sidebar-menu">
                <div className="overlaybg"></div>
            </div>
        </header>
    )
}

export default PagesNavbar