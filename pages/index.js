"use client"
import React, { useRef } from 'react';
import Image from "next/image";
import backgroundImg from "../public/images/bg/background.jpg"
import backgroundImg1 from "../public/images/others/shape.png"
import Link from "next/link";
import aboutImg from "../public/images/about.png"
import Head from 'next/head';
import ServicesCards from '../components/ServicesCards';


export default function Home() {
  const aboutProgressRef = useRef(null);

  return (
    <div>

      <Head>
        <meta name="description" content="Jalkruti Water Solutions Private Limited" />
        <meta name="keywords" content="Jalkruti Water Solutions Private Limited, Water Solution" />
        <title>Jalkruti Water Solutions Private Limited</title>
      </Head>


      <div id="hero-block" className="hero-block bg-image bg-overlay overlay-image-one bg-parallax"
        style={{ background: "rgba(0, 0, 0, 0) url(" + backgroundImg.src + ")", backgroundBlendMode: "overlay" }}>
        <div className="vector-image">
          {/* <Image src={backgroundImg2} alt="Vector" /> */}
        </div>

        <div className="waves-effect bottom" style={{ backgroundImage: "url(" + backgroundImg1.src + ")" }}></div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content-area">
                <div className="hero-desc">
                  Jalkruti Water Solutions Private Limited
                </div>
                <h2 className="hero-title">
                  Pioneering Advanced Water Engineering & Management Solutions
                </h2>
                
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    aboutProgressRef.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                  className="btn btn-primary">Our Services <i className="fa fa-angle-double-right"></i></Link>

              </div>
            </div>
          </div>
        </div>
      </div>




      <div id="about-block" className="about-us-block pd-t-170" data-aos="fade-up">
        <div className="container container-1200">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="title-main">
                  About
                  {/* <span>About</span> */}
                </h2>
                <p className="sub-title">Leading the way in water engineering and ecological sustainability</p>
              </div>
            </div>
          </div>

          <div className="row align-items-center flex-column-reverse flex-lg-row mrb-55">
            <div className="col-lg-6">
              <div className="about-content">
                <h3 className="heading">Who we are</h3>
                {/* <p className="description">I am Dynamic Creative Designer Photographer and Developer</p> */}
                <p>Jalkruti Water Solutions Pvt. Ltd. is water engineering consulting firm. 
                  It provides services in dam engineering, barrage engineering, river hydrology, river hydraulics, river training works, e-flow, catchment area treatment, instrumentation, judo mechanical and hydro electrical, sea shore protection, estuarine aspects of river and river ecology, water resource management, inter-basin transfer of water, drainage planning, domestic water supply and water treatment, industrial water treatment and effluent handling, piped water supplies, water accounting and auditing including flow measurement, mapping of water resources, groundwater management, water conveyance systems design, Topography, bathymetry and marine survey using the latest technology and UAV manufacturing and services.
                </p>
 
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mock-up-thumb">
                <Image src={aboutImg} alt="About Mock" />
              </div>
            </div>
          </div>

        </div>
      </div>


      <div id="blog-block" className="latest-news-block pd-t-170 pd-b-170" ref={aboutProgressRef} data-aos="fade-up">
        <div className="container container-1200 ml-b-30">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="title-main">
                  Our Services
                </h2>
                <p className="sub-title">Innovating water engineering for tomorrow’s needs</p>
              </div>
            </div>
          </div>

          <ServicesCards/>
        </div>
      </div>


    </div>

  );
}
