import PageTitle from '../components/PageTitle'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Head from 'next/head'
import Footer from '../components/Footer';

const ContactPage = () => {

  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Jalkruti Website Contact Form', phone: '', message: '', organization: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("")


  useEffect(() => {
    const messageTimer = setTimeout(() => {
      setMessage('');
    }, 2000);

    return () => {
      clearTimeout(messageTimer);
    };
  }, [message]);


  const handleChange = ({ target }) =>
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));

  const onSubmit = async () => {
    const hasNullValue = Object.values(formData).some(value => value === null || value === '');
    if (hasNullValue) {
      setMessage('Please fill in all required fields before submitting.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('/api/contact', formData, {
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      });

      if (response.status !== 200) {
        throw new Error('Failed to send message');
      }

      setIsLoading(false);
      setFormData({ name: '', email: '', subject: 'Jalkruti Website Contact Form', phone: '', message: '', organization: '' });
      setMessage('Message Sent Successfully');
    } catch (error) {
      setIsLoading(false);
      setMessage('Error sending message:', error);

    }
  };


  return (
    <>

      <Head>
        <meta name="description" content="Jalkruti Water Solutions Private Limited" />
        <meta name="keywords" content="Jalkruti Water Solutions Private Limited, Water Solution" />
        <title>Contact Us | Jalkruti Water Solutions</title>
      </Head>

      <PageTitle
        pageName="Contact Us"
        TagLine="How can we help you?"
      />

      <div className="site-content" >


        {/* <div className="section-title text-center pd-t-170">
          <h2 className="title-main">
            Contact Us
          </h2>
        </div> */}

        {/* <div id="about-block" className="about-us-block about-style-two pd-t-170"> */}

        <div className="blog-page-block pd-t-170 pd-b-100" data-aos="fade-up">
          <div className="container container-1200">
            <div className="row">
              <div className="col-lg-8">
                <div className="comment-respond" style={{ height: "100%" }}>
                  <div className="comment-form">
                    <h3 className="comment-reply-title section-heading">Connect with Us</h3>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="group">
                          <label for="name">Name*</label>
                          <input
                            name='name'
                            type="text" className="form-control"
                            placeholder="Your Name"
                            value={formData.name}
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="group">
                          <label for="email">Email*</label>
                          <input name='email'
                            type="email" className="form-control"
                            placeholder="Email Address"
                            value={formData.email}
                            required
                            onChange={handleChange} />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="group">
                          <label for="phone">Contact Number*</label>
                          <input name='phone'
                            type="text" className="form-control"
                            value={formData.phone}
                            required
                            onChange={handleChange}

                            placeholder="Contact Number" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="group">
                          <label for="email">Organization Name*</label>
                          <input name='organization'
                            type="email" className="form-control"
                            placeholder="Organization Name"
                            value={formData.organization}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="group">
                          <label for="message">Your Message*</label>
                          <textarea name="message"
                            className="form-control" rows="4" cols="50"
                            value={formData.message}
                            required
                            onChange={handleChange}

                            placeholder="Type Message"></textarea>
                        </div>
                      </div>
                      <div className="form-submit clearfix">

                        <button

                          onClick={onSubmit}
                          className="btn btn-primary"
                          disabled={isLoading}
                          style={{ opacity: isLoading ? 0.5 : 1, pointerEvents: isLoading ? 'none' : 'auto', padding:"5px" }}
                        >
                          {isLoading ? 'Sending...' : 'Send'}
                        </button>
                        <p>{message}</p>



                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-lg-4 mb-10">

                <div className="comment-respond" style={{ height: "100%" }}>
                  <div className="comment-form">
                    <h3 className="comment-reply-title section-heading">Reach Us</h3>
                    <div className="row">
                      <p>
                        <strong> Office:</strong> Research Park, IIT Gandhinagar, Gujarat, 382355
                      </p>



                      <p><strong> Hours:</strong> <br />
                        Mon To Sat - 09.00-18.00 <br />
                        Sunday - Close
                      </p>

                      <p><strong> Email:</strong> info@jalkruti.com</p>


                      <div  style={{ minHeight:"250px", width: "100%", }}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14666.716008600612!2d72.6903549!3d23.2183661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bdd10281fa1%3A0xc3f3a36276b39c77!2sIIT%20Gandhinagar%20Research%20Park!5e0!3m2!1sen!2sin!4v1691746161029!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex={0}
                    referrerPolicy="no-referrer-when-downgrade" title='Google Map'>
                  </iframe>
                </div>



                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>



        </div>


        {/* <div className="blog-page-block pd-t-50 pd-b-130" data-aos="fade-up">
          <div className="container container-1200">
            <div className="row">
              <div className="col-lg-12">
                <div className="comment-respond" style={{ minHeight:"300px", height: "100%", padding:"10px" }}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14666.716008600612!2d72.6903549!3d23.2183661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bdd10281fa1%3A0xc3f3a36276b39c77!2sIIT%20Gandhinagar%20Research%20Park!5e0!3m2!1sen!2sin!4v1691746161029!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex={0}
                    referrerPolicy="no-referrer-when-downgrade" title='Google Map'>
                  </iframe>
                </div>

              </div>
            </div>
          </div>
        </div> */}

      </div>


<Footer/>

    </>
  )
}

export default ContactPage