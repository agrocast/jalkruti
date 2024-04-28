import Head from 'next/head'
import PageTitle from '../components/PageTitle'
import React from 'react'
import Image from 'next/image'
import problem1 from "../public/images/services/problem1.jpg"
import problem2 from "../public/images/services/problem2.jpg"
import problem3 from "../public/images/services/problem3.jpg"
import ServicesCards from '../components/ServicesCards'

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

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2 className="title-main">
                    Problems in Hydraulic Structures
                  </h2>

                </div>
              </div>
            </div>


            <div class="container container-1200">
              <div class="blog-single-page">
                <article class="post single-post">
                  <div class="row">
                    <div class="col-lg-6">
                      <figure class="post-thumb">
                        <Image src={problem1} alt="Blog Image" />
                      </figure>
                    </div>

                    <div class="col-lg-6">
                      <div class="post-details">
                        <h2 class="entry-title">Maintenance and Repairs of Concrete and Masonry Dams</h2>
                        <div class="entry-content">
                          <ul>
                            <li>Aging concrete and masonry dams face challenges in the form of leaching, seepage, delamination of concrete cover, erosion in downstream, foundation issues, ill-functioning of hydro-mechanical and electrical components, etc.
                            </li>
                            <li>Earthquake induced damages may be dangerous</li>
                            <li>Dam instrumentation is also required in the present time</li>
                            <li>Aging earthen dams face challenges in the form of seepage, choking of internal drainages, upstream erosion due to wave action, downstream erosion, hollows due to burrowing animals, slippage, sudden breach, etc.</li>
                          </ul>
                          <p>
                          </p>

                        </div>
                      </div>

                    </div>
                  </div>
                </article>






                <article class="post single-post">
                  <div class="row">
                    <div class="col-lg-6">
                      <figure class="post-thumb">
                        <Image src={problem2} alt="Blog Image" />
                      </figure>
                    </div>

                    <div class="col-lg-6">
                      <div class="post-details">
                        <h2 class="entry-title">Climate Change and Hydrology </h2>
                        <div class="entry-content">
                          <ul>
                            <li>Climate change has changed hydrological parameters of the catchments areas of existing dams  </li>
                            <li>Design Flood values are falling short </li>
                            <li>Revision of design flood and provision of additional spillways are required in many existing dams </li>


                          </ul>
                          <p>
                          </p>

                        </div>
                      </div>

                    </div>
                  </div>
                </article>


                <article class="post single-post">
                  <div class="row">
                    <div class="col-lg-6">
                      <figure class="post-thumb">
                        <Image src={problem3} alt="Blog Image" />
                      </figure>
                    </div>

                    <div class="col-lg-6">
                      <div class="post-details">
                        <h2 class="entry-title">Conveyance Systems</h2>
                        <div class="entry-content">
                          <ul>
                            <li>Canal systems might get damaged due to soil properties and construction flaws or aging   </li>
                            <li>Canal repairs with enhanced hydraulic conductivity is a special kind of skill</li>
                          </ul>
                          <p>
                          </p>

                        </div>
                      </div>

                    </div>
                  </div>
                </article>



              </div>



            </div>



          </div>

          </div>


        </div >

        <div id="blog-block" className="latest-news-block pd-t-170 pd-b-170" data-aos="fade-up">
          <div className="container container-1200 ml-b-30">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2 className="title-main">
                    Our Services
                  </h2>
                  {/* <p className="sub-title">Innovating Water Engineering for Tomorrow’s Needs</p> */}
                </div>
              </div>
            </div>

            <ServicesCards />
          </div>
        </div>





      </>
      )
}

      export default ServicesPage