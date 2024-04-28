"use client"
import React, { useRef } from 'react';

import Image from "next/image";

import backgroundImg from "../public/images/bg/background.jpg"
import backgroundImg1 from "../public/images/others/shape.png"
import backgroundImg2 from "../public/images/others/vactor.png"
import Link from "next/link";

import aboutImg2 from "../public/images/about.png"





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
                {/* <ul className="hero-services">
                  <li>Ux/UI Designed</li>
                  <li>Developing</li>
                  <li>Marketing</li>
                </ul> */}
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




      <div id="about-block" className="about-us-block pd-t-170">
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
                {/* <div className="author-sign">
                  <Image src={aboutImg1} alt="Author Sign" />
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mock-up-thumb">
                <Image src={aboutImg2} alt="About Mock" />
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="fanfact-promo-numbers">
                <div className="promo-number">
                  <div className="odometer" data-odometer-final="117">0</div>
                  <h4 className="promo-title">Happy Client</h4>
                </div>
                <div className="promo-number">
                  <div className="odometer" data-odometer-final="20">0</div>
                  <h4 className="promo-title">Years Experience</h4>
                </div>
                <div className="promo-number">
                  <div className="odometer" data-odometer-final="16">0</div>
                  <h4 className="promo-title">Award Wines</h4>
                </div>
                <div className="promo-number">
                  <div className="odometer" data-odometer-final="156">0</div>
                  <h4 className="promo-title">Project Complete</h4>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="skill-with-social">
                <div className="skill-list">
                  <h3 className="heading">My Skills</h3>
                  <div className="single-skill">
                    <h3 className="skill-title">Developing</h3>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "90%" }}>
                        <span>90%</span>
                      </div>
                    </div>
                  </div>

                  <div className="single-skill">
                    <h3 className="skill-title">Design</h3>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "88%" }} >
                        <span>88%</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-skill">
                    <h3 className="skill-title">Marketing</h3>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "85%" }}>
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="social-status">
                  <h3 className="heading">Follow Me</h3>
                  <div className="social-profile-list">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>






      <div id="blog-block" className="latest-news-block pd-t-170 pd-b-170" ref={aboutProgressRef}>
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
