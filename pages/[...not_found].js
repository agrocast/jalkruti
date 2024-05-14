import Image from 'next/image'
import React from 'react'
import img1 from "../public/images/others/404.png"
import Head from 'next/head'
import PageTitle from '../components/PageTitle'
import Footer from '../components/Footer'
import Link from 'next/link'
const NotFoundPage = () => {
  return (
    <>

      <Head>
        <meta name="description" content="Jalkruti Water Solutions Private Limited" />
        <meta name="keywords" content="Jalkruti Water Solutions Private Limited, Water Solution" />
        <title>Page Not Found | Jalkruti Water Solutions</title>
      </Head>

      <PageTitle
        pageName="Oops! Page Not Found"
        TagLine=""
      />


      <div className="error-page-block pd-t-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="error-page-content-outer">
                <div className="error-page-content">
                  <div className="error-thumbnail text-center">
                    <Image src={img1} alt="Error" />
                  </div>

                  <div className="error-text-content pd-b-20">
                    <h2 className="error-title">Page Not Found</h2>
                    <p className="error-text">A 404 error is a common error and can be caused by a number of issues.
                      Essentially, a 404 error occurs when the information that you requested is not available</p>
                  </div>

                  <Link href="/" className="btn btn-primary">Back to Home<i className="fa fa-angle-double-right"></i></Link>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer/>

    </>

  )
}

export default NotFoundPage