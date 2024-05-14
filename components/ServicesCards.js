import React from 'react'

import Img1 from "../public/images/services/img1.jpg"
import Img2 from "../public/images/services/img2.jpg"
import Img3 from "../public/images/services/img3.jpg"
import Img4 from "../public/images/services/img4.jpg"
import Img5 from "../public/images/services/img5.jpg"
import Img6 from "../public/images/services/img6.jpg"
import Img7 from "../public/images/services/img7.jpg"
import Img8 from "../public/images/services/img8.jpg"
import Img9 from "../public/images/services/img9.jpg"
import Image from 'next/image'
import Link from 'next/link'


const OurServicesData = [
  {
    Title: "Dam and barrage engineering",
    Description: "Expertise in the design, construction, and maintenance of dams and barrages for optimal water control and utilization.",
    Image: Img1,
  },
  {
    Title: "River engineering and management",
    Description: "Specialized in river hydrology, hydraulics, training works, and comprehensive river ecology management.",
    Image: Img2,
  },
  {
    Title: "Water resource and conveyance systems",
    Description: "Advanced solutions in water resource management, inter-basin transfer, and design of efficient water conveyance systems.",
    Image: Img3,
  },
  {
    Title: "E-Flow and environmental sustainability",
    Description: "Ensuring environmental flow requirements are met to support ecological balance and river health.",
    Image: Img4,
  },
  {
    Title: "Water treatment and supply",
    Description: "State-of-the-art domestic and industrial water treatment, including effluent handling and piped water supplies.",
    Image: Img5,
  },
  {
    Title: "Instrumentation and technology integration",
    Description: "Cutting-edge instrumentation and adoption of new technologies for accurate data gathering and analysis.",
    Image: Img6,
  },
  {
    Title: "Survey and mapping services",
    Description: "Comprehensive topography, bathymetry, and marine surveys using UAV technology for precise data collection.",
    Image: Img7,
  },
  {
    Title: "Water accounting and auditing",
    Description: "Detailed water accounting and auditing to ensure efficient use and management of water resources.",
    Image: Img8,
  },
  {
    Title: "Coastal and marine infrastructure",
    Description: "Expert solutions in sea shore protection and estuarine aspects, safeguarding against erosion and environmental impacts.",
    Image: Img9,
  },
]


const ServicesCards = () => {
  return (

    <div className="row latest-news-list gutters-30">
      {OurServicesData.map((item, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <article className="post post-grid">
            <figure className="post-thumb">
              {/* <Link href="/services"> */}
              <Image src={item.Image} alt="Blog Image" />
              {/* </Link> */}
            </figure>
            <div className="post-details">

              <h2 className="entry-title">
                {/* <Link href="/services"> */}
                {item.Title}
                {/* </Link> */}
              </h2>


              <div className="entry-meta">
                <div className="entry-date">{item.Description}</div>
              </div>


            </div>
          </article>
        </div>
      ))}


    </div>

  )
}

export default ServicesCards