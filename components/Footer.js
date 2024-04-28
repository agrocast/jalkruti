import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer id="contact-block" className="site-footer">
			<div className="container">

				<div className="footer-content-wrapper">
					<div className="footer-widget-area">
						<div className="row">

							<div className="col-lg-6 col-md-6">
								<aside className="widget widget_links">
									<h2 className="widget-title"><span>Quick Link</span></h2>

									<div className="widget-content">

										<div className="row">

											<div className="col-lg-6 col-md-6">

												<ul>
													<li><Link href="/">Home</Link></li>
													<li><Link href="/about">About</Link></li>
													<li><Link href="/services">Services</Link></li>
													{/* <li><Link href="/">Recent News</Link></li> */}

												</ul>


											</div>
											<div className="col-lg-6 col-md-6">
						
												<ul>
													<li><a href="https://agrocastanalytics.com/" target='_blank'>Agrocast Analytics <i class="fa fa-external-link" aria-hidden="true"></i></a></li>
													<li><Link href="/">Terms & Conditions</Link></li>
													{/* <li><Link href="/">Privacy Policies</Link></li> */}
													<li><Link href="/contact">Contact Us</Link></li>

												</ul>


											</div>
										</div>
									</div>

								</aside>
							</div>
							<div className="col-lg-6 col-md-6">
								<aside className="widget widget_contact">

									<div className="row">
										<div className="col-lg-6 col-md-6">
											<div className="single-contact-info">
												<div className="icon">
													<i className="fa fa-envelope-o"></i>
												</div>
												<p><a href="mailto:support@vivek@jalkruti.com">vivek@jalkruti.com</a></p>
											</div>
											<div className="single-contact-info">
												<div className="icon">
													<i class="fa fa-phone" aria-hidden="true"></i>
												</div>
												<p>+91-9909028626</p>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">

											<div className="single-contact-info">
												<div className="icon">
													<i class="fa fa-map-marker" aria-hidden="true"></i>
												</div>
												<p>Research Park, IIT Gandhinagar, Gujarat, 382355</p>
											</div>
											<div className="single-contact-info">
												<div class="social-status">

													<div class="entry-share">

														<div class="share">
															<a href="#"><i class="fa fa-facebook-f"></i></a>
															<a href="#"><i class="fa fa-twitter"></i></a>
															<a href="#"><i class="fa fa-linkedin"></i></a>
															<a href="#"><i class="fa fa-youtube"></i></a>



														</div>
													</div>

													{/* 									
												<div class="social-profile-list" style={{display:"flex", textAlign:"right"}}>
													<a href="#"><i class="fab fa-instagram"></i></a>
													<a href="#"><i class="fab fa-facebook-f"></i></a>
													<a href="#"><i class="fab fa-twitter"></i></a>
													<a href="#"><i class="fab fa-linkedin-in"></i></a>
												</div> */}
												</div>

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

			</div>
		</footer>
	)
}

export default Footer