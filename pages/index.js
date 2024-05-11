"use client"
import React, { useRef } from 'react';
import Image from "next/image";
import backgroundImg from "../public/images/bg/backgroundVideo.gif"
import backgroundImg1 from "../public/images/others/shape.png"
import Link from "next/link";
import aboutImg from "../public/images/about.png"
import Head from 'next/head';

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
        style={{ background: "rgba(0, 0, 0, 0) url(" + backgroundImg.src + ")", backgroundBlendMode: "overlay", height: "100vh" }}>




        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content-area">
                <h2 className="hero-title">
                  Advancing <br/> Water Engineering &<br/> Management Solutions
                </h2>

                <Link href="/services" className="btn btn-primary">Our Services <i className="fa fa-angle-double-right"></i></Link>

              </div>
            </div>
          </div>
        </div>
      </div>


      <div style={{ display: "none" }}>

          <a href="https://clustrmaps.com/site/1bzlq" title="Visit tracker">
            <img src="//www.clustrmaps.com/map_v2.png?d=nLvUr9IHsmhpvvc7okqcqaxCxhndxiJlJZMLjM75k-U&cl=ffffff" alt='Visitor counts'
            />
            </a>

      </div>





    </div>

  );
}
