"use client"
import React  from 'react';
import backgroundImg from "../public/images/bg/backgroundVideo.gif"
import Link from "next/link";
import Head from 'next/head';

export default function Home() {

  return (
    <div>

      <Head>
        <meta name="description" content="We view water holistically. For us, Integrated Water Resource Management 
        is not merely a concept; rather, it is a healthy practice. We believe engineering is an art of adapting nature; and, 
        any effort to conquer it is disastrous. Therefore, to us, water engineering is for serving ecology and mankind, living and non-living (so-called).
         We religiously believe that so long as the hydraulic cycle runs uninterruptedly, this earth would exist." />
        <meta name="keywords" content="Jalkruti, Jalkruti Water Solutions Private Limited, Water Solution" />
        <meta name="author" content="Jalkruti" />
        <meta name="copyright" content="Jalkruti Water Solutions Private Limited" />
        <meta name="robots" content="follow"/>
        <title>Jalkruti Water Solutions Private Limited</title>
      </Head>



      <div id="hero-block" className="hero-block bg-image bg-overlay overlay-image-one bg-parallax"
        style={{ background: "rgba(0, 0, 0, 0) url(" + backgroundImg.src + ")", backgroundBlendMode: "overlay", height: "100vh", paddingTop:"35vh" }}>




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
