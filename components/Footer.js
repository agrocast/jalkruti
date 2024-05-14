import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import logo from "../public/images/logo/PrimaryLogo_Coloured.jpg"
const Footer = () => {
	return (
		<footer id="contact-block" className="site-footer">
			<div className="container">

				<div className="footer-content-wrapper">
					<div className="footer-widget-area">
						<div className="row">

							<div className="col-lg-6 col-md-8">
								<div className='footer_logo'>
									<Image src={logo} alt="logo_image" />

								</div>


							</div>

							<div className="col-lg-6 col-md-4">
								<aside className="widget widget_contact">

									<div className="row">

										<div className="col-lg-4 col-md-6">
											<div className="single-contact-info">
												<a href="https://www.linkedin.com/company/jalkruti-water-solutions-pvt-ltd" target='_blank'>
													<div className="icon">
														<i class="fa fa-linkedin" aria-hidden="true"></i>
													</div>
												</a>

											</div>
										</div>

										<div className="col-lg-4 col-md-6">
											<div className="single-contact-info">
												<div className="icon">
													<i className="fa fa-envelope-o"></i>
												</div>
												<p><a href="mailto:info@jalkruti.com">info@jalkruti.com</a></p>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">

											<div className="single-contact-info">
												<div className="icon">
													<i class="fa fa-map-marker" aria-hidden="true"></i>
												</div>
												<p>Research Park, IIT Gandhinagar, Gujarat, 382355</p>
											</div>

										</div>


									</div>

								</aside>
							</div>
						</div>
					</div>
					<div className="copyright-text text-center">
						<p>Copyright @ 2024 Jalkruti Water Solutions Pvt. Ltd.</p>
					</div>
				</div>

			</div >
		</footer >
	)
}

export default Footer