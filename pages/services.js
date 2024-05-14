import Head from 'next/head'
import PageTitle from '../components/PageTitle'
import React from 'react'
import dam1 from "../public/images/services/dam1.jpg"
import dam2 from "../public/images/services/dam2.jpg"
import dam3 from "../public/images/services/dam3.jpg"
import dam4 from "../public/images/services/dam4.jpg"
import dam5 from "../public/images/services/dam5.jpg"
import dam6 from "../public/images/services/dam6.jpg"
import dam7 from "../public/images/services/dam7.jpg"
import dam8 from "../public/images/services/dam8.jpg"

import canal1 from "../public/images/services/canal1.jpg"
import canal2 from "../public/images/services/canal2.jpg"
import canal4 from "../public/images/services/canal4.jpg"


import harvesting1 from "../public/images/services/harvesting1.jpg"
import harvesting2 from "../public/images/services/harvesting2.jpg"
import harvesting4 from "../public/images/services/harvesting4.jpg"

import planning1 from "../public/images/services/planning1.jpg"
import planning2 from "../public/images/services/planning2.jpg"

import river1 from "../public/images/services/river1.jpg"
import river2 from "../public/images/services/river2.jpg"

import legal1 from "../public/images/services/legal1.jpg"

import Footer from '../components/Footer'
import ImageSlideshow from '../components/ImageSlideshow'





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


        <div class="blog-page-block pd-t-50">

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


            <div class="container container-1200 ">
              <div class="blog-single-page">
                <article class="post single-post pd-b-100" data-aos="fade-up">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="post-thumb" style={{ marginBottom: "20px" }}>
                        <ImageSlideshow images={[dam1, dam2, dam3, dam4, dam5, dam6, dam7, dam8]} />
                      </div>
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




                </article>













                <article class="post single-post pd-b-100" data-aos="fade-up">
                  <div class="row">
                    

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

                    <div class="col-lg-6 post-thumb">
                      <div class="post-thumb" style={{ marginBottom: "20px" }}>
                        <ImageSlideshow images={[canal1, canal2, canal4]} />
                      </div>
                    </div>

                  </div>



                </article>

                <article class="post single-post pd-b-100" data-aos="fade-up">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="post-thumb" style={{ marginBottom: "20px" }}>
                        <ImageSlideshow images={[harvesting1, harvesting2, harvesting4]} />
                      </div>
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


                </article>



                <article class="post single-post pd-b-100" data-aos="fade-up">
                  <div class="row">
                    

                    <div class="col-lg-6">
                      <div class="post-details">
                        <h2 class="entry-title">Water Planning and Management </h2>
                        <div class="entry-content">
                          <ul>

                            <li>Deficit Planning</li>
                            <li>Supplementary Irrigation Management </li>
                            <li>Drainage Design</li>
                            <li>Water Budgeting, Accounting and Auditing</li>
                            <li>Water Recycling, Reuse and Water Quality Management</li>


                          </ul>
                          <p>
                          </p>

                        </div>
                      </div>

                    </div>

                    <div class="col-lg-6">
                      <div class="post-thumb" style={{ marginBottom: "20px" }}>
                        <ImageSlideshow images={[planning1, planning2]} />
                      </div>
                    </div>

                  </div>


                </article>


                <article class="post single-post pd-b-100" data-aos="fade-up">
                  <div class="row">
                    <div class="col-lg-6 post-thumb">
                      <div class="post-thumb" style={{ marginBottom: "20px" }}>
                        <ImageSlideshow images={[legal1, legal1]} />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="post-details">
                        <h2 class="entry-title">Techno-legal Solutions   </h2>
                        <div class="entry-content">
                          <ul>
                            <li>Preparation of Detailed Project Report</li>
                            <li> Drafting Tender Documents</li>
                            <li>Preparing Project Execution Models</li>
                            <li>Preparing Project Finance and Business Models</li>
                            <li>Arbitration and Conciliation Services</li>



                          </ul>
                          <p>
                          </p>

                        </div>
                      </div>

                    </div>
                  </div>



                </article>


                <article class="post single-post pd-b-100" data-aos="fade-up">
                  <div class="row">
                    

                    <div class="col-lg-6">
                      <div class="post-details">
                        <h2 class="entry-title">River Engineering and Ecology   </h2>
                        <div class="entry-content">
                          <ul>
                            <li>River Training Works</li>
                            <li>River Bank Protection Works</li>
                            <li>Ecological flow, Ecology Preservation and Rejuvenation</li>
                            <li> Wetland Preservation</li>
                            <li> Design of Fish Pass and Fish Channel</li>


                          </ul>
                          <p>
                          </p>

                        </div>
                      </div>

                    </div>

                    <div class="col-lg-6 post-thumb">
                      <div class="post-thumb" style={{ marginBottom: "20px" }}>
                        <ImageSlideshow images={[river1, river2]} />
                      </div>
                    </div>


                  </div>



                </article>

              </div>


            </div>












          </div>






        </div>



      </div>








      <Footer />

    </>
  )
}

export default ServicesPage