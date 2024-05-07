import Head from 'next/head'
import PageTitle from '../components/PageTitle'
import React from 'react'
import Image from 'next/image'
import dam1 from "../public/images/services/dam1.jpg"
import dam2 from "../public/images/services/dam2.jpg"
import dam3 from "../public/images/services/dam3.jpg"
import dam4 from "../public/images/services/dam4.jpg"
import dam5 from "../public/images/services/dam5.jpg"

import canal1 from "../public/images/services/canal1.jpg"
import canal2 from "../public/images/services/canal2.jpg"
import canal3 from "../public/images/services/canal3.jpg"
import canal4 from "../public/images/services/canal4.jpg"
import canal5 from "../public/images/services/canal5.jpg"

import harvesting1 from "../public/images/services/harvesting1.jpg"
import harvesting2 from "../public/images/services/harvesting2.jpg"
import harvesting3 from "../public/images/services/harvesting3.jpg"
import harvesting4 from "../public/images/services/harvesting4.jpg"
import harvesting5 from "../public/images/services/harvesting5.jpg"



import ServicesCards from '../components/ServicesCards'
import Footer from '../components/Footer'

const ServicesPage = () => {
  return (
    <>


      <Head>
        <meta name="description" content="Jalkruti Water Solutions Private Limited" />
        <meta name="keywords" content="Jalkruti Water Solutions Private Limited, Water Solution" />
        <title>Services | Jalkruti Water Solutions</title>
      </Head>

      <PageTitle
        pageName="Our Services"
        TagLine="Innovating Water Engineering for Tomorrow’s Needs"
      />



      <div class="site-content" >


        <div class="blog-page-block pd-t-100 pd-b-130" data-aos="fade-up">

          <div className="container container-1200">

            {/* <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2 className="title-main">
                    Problems in Hydraulic Structures
                  </h2>

                </div>
              </div>
            </div> */}


            <div class="container container-1200 pd-b-100">
              <div class="blog-single-page">
                <article class="post single-post">
                  <div class="row">
                    <div class="col-lg-6">
                    <figure class="post-thumb" style={{marginBottom:"20px"}}>
                        <Image src={dam1} alt="Blog Image" />
                      </figure>
                    </div>

                    <div class="col-lg-6">
                      <div class="post-details">
                        <h2 class="entry-title">Dam Engineering</h2>
                        <div class="entry-content">
                          <ul>
                            <li>Hydrology</li>
                            <li>Hydraulics</li>
                            <li>Dam Safety</li>
                            <li>Dam Repairs and Rehabilitation</li>
                            <li>Reservoir Operation</li>
                            <li>Instrumentation</li>
                            <li>Decision Support Systems</li>
                            <li>Catchment Area Treatment</li>
                            <li>Instrumentation and Automation</li>
                            <li>Flood Control, Warning Systems and Risk Management</li>



                          </ul>
                          <p>
                          </p>

                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="row portfolio-grid gutters-40">
                    <div class="item col-lg-4 col-xl-3 col-md-6 application">
                      <figure class="portfolio-thumb">
                        <Image src={dam2} alt="portfolio Item" />
                      </figure>
                    </div>

                    <div class="item col-lg-4 col-xl-3 col-md-6 application">
                      <figure class="portfolio-thumb">
                        <Image src={dam3} alt="portfolio Item" />
                      </figure>
                    </div>

                    <div class="item col-lg-4 col-xl-3 col-md-6 application">
                      <figure class="portfolio-thumb">
                        <Image src={dam4} alt="portfolio Item" />
                      </figure>
                    </div>

                    <div class="item col-lg-4 col-xl-3 col-md-6 application">
                      <figure class="portfolio-thumb">
                        <Image src={dam5} alt="portfolio Item" />
                      </figure>
                    </div>

                  </div>


                </article>






              </div>


            </div>






            <article class="post single-post pd-b-100">
              <div class="row">
                <div class="col-lg-6">
                <figure class="post-thumb" style={{marginBottom:"20px"}}>
                    <Image src={canal1} alt="Blog Image" />
                  </figure>
                </div>

                <div class="col-lg-6">
                  <div class="post-details">
                    <h2 class="entry-title">Water Conveyance Systems & Irrigation Management </h2>
                    <div class="entry-content">
                      <ul>
                        <li>Calibration and Benchmarking of Irrigation Systems</li>
                        <li>Canal Engineering and enhancement of hydraulic conductivity</li>
                        <li>Canal structures</li>
                        <li>Conveyance Efficiency Enhancement</li>
                        <li>Planning and Design of Lift Irrigation Systems</li>
                        <li>Repairs, Rehabilitation and Modernization of Canals</li>
                        <li>Flow Measurement, Canal Operation, Instrumentation and Automation</li>
                        <li>Micro Irrigation Systems</li>
                        <li>Irrigation in Challenging Soils</li>

                      </ul>
                      <p>
                      </p>

                    </div>
                  </div>

                </div>
              </div>

              <div class="row portfolio-grid gutters-40">
                <div class="item col-lg-4 col-xl-3 col-md-6 application">
                  <figure class="portfolio-thumb">
                    <Image src={canal2} alt="portfolio Item" />
                  </figure>
                </div>

                <div class="item col-lg-4 col-xl-3 col-md-6 application">
                  <figure class="portfolio-thumb">
                    <Image src={canal3} alt="portfolio Item" />
                  </figure>
                </div>

                <div class="item col-lg-4 col-xl-3 col-md-6 application">
                  <figure class="portfolio-thumb">
                    <Image src={canal4} alt="portfolio Item" />
                  </figure>
                </div>

                <div class="item col-lg-4 col-xl-3 col-md-6 application">
                  <figure class="portfolio-thumb">
                    <Image src={canal5} alt="portfolio Item" />
                  </figure>
                </div>

              </div>

            </article>

            <article class="post single-post pd-b-100">
              <div class="row">
                <div class="col-lg-6">
                  <figure class="post-thumb" style={{marginBottom:"20px"}}>
                    <Image src={harvesting1} alt="Blog Image" />
                  </figure>
                </div>

                <div class="col-lg-6">
                  <div class="post-details">
                    <h2 class="entry-title">Water Harvesting Systems & Conjunctive Use of Water </h2>
                    <div class="entry-content">
                      <ul>

                        <li>Planning and Design of Decentralized Water Harvesting Systems</li>
                        <li>Groundwater Recharge </li>
                        <li>Conjunctive Use of Water </li>
                        <li>Conveyance Efficiency Enhancement </li>
                        <li>Ancient Water Conservation Systems</li>

                      </ul>
                      <p>
                      </p>

                    </div>
                  </div>

                </div>
              </div>

              <div class="row portfolio-grid gutters-40">
                <div class="item col-lg-4 col-xl-3 col-md-6 application">
                  <figure class="portfolio-thumb">
                    <Image src={harvesting2} alt="portfolio Item" />
                  </figure>
                </div>

                <div class="item col-lg-4 col-xl-3 col-md-6 application">
                  <figure class="portfolio-thumb">
                    <Image src={harvesting3} alt="portfolio Item" />
                  </figure>
                </div>

                <div class="item col-lg-4 col-xl-3 col-md-6 application">
                  <figure class="portfolio-thumb">
                    <Image src={harvesting4} alt="portfolio Item" />
                  </figure>
                </div>

                <div class="item col-lg-4 col-xl-3 col-md-6 application">
                  <figure class="portfolio-thumb">
                    <Image src={harvesting5} alt="portfolio Item" />
                  </figure>
                </div>

              </div>

            </article>









          </div>






        </div>



      </div>








      <Footer />

    </>
  )
}

export default ServicesPage