import Image from 'next/image'
import React from 'react'
import img1 from "../public/images/others/404.png"
import Footer from '../components/Footer'
import PagesNavbar from '../components/PagesNavbar'
const NotFoundPage = () => {
  return (
    <>
    <PagesNavbar/>
      <div className="error-page-block pd-t-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="error-page-content-outer">
                <div className="error-page-content">
                  <div className="error-thumbnail text-center">
                    <Image src={img1} alt="Error" />
                  </div>

                  <div className="error-text-content">
                    <h2 className="error-title">Page Not Found</h2>
                    <p className="error-text">A 404 error is a common error and can be caused by a number of issues.
                      Essentially, a 404 error occurs when the information that you requested is not available</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </>

  )
}

export default NotFoundPage