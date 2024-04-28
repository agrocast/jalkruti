import PagesNavbar from '../components/PagesNavbar'
import ScrollToTopButton from '../components/ScrollToTopButton'
import React from 'react'
import teamMember1 from "../public/images/team/1.jpg"
import teamMember2 from "../public/images/team/2.jpg"
import teamMember3 from "../public/images/team/3.jpg"
import teamMember4 from "../public/images/team/4.jpg"
import teamMember5 from "../public/images/team/5.jpg"
import Image from 'next/image'
import backgroundImg from "../public/images/bg/about-bg.jpg"
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import Navbar from '../components/MainNavbar'
import Head from 'next/head'

import BuildTrust from "../public/images/icon/services/BuildTrust.png"
import Takecharge from "../public/images/icon/services/Takecharge.png"
import ThriveTogether from "../public/images/icon/services/ThriveTogether.png"
import Quality from "../public/images/icon/services/Quality.png"



const TeamData = [
	{
		Name: "Mr. Vivek Kapadia (Ex. Secretary GoG)",
		Designation: "Director",
		LinkedIn: "https://www.linkedin.com/in/vivek-kapadia-77678116a/",
		Twitter: "https://twitter.com/VivekPKapadia",
		Email: "vivek@jalkruti.com",
		ProfielPhoto: teamMember1,
	},
	{
		Name: "Dr. Harsh Love Shah (Ph.D., IIT GN)",
		Designation: "Director",
		LinkedIn: "https://www.linkedin.com/in/harsh-shah-77595179/",
		Twitter: "https://twitter.com",
		Email: "harsh@jalkruti.com",
		ProfielPhoto: teamMember2,
	},
	{
		Name: "Mr. Brijesh Patel",
		Designation: "Director",
		LinkedIn: "https://www.linkedin.com",
		Twitter: "https://twitter.com",
		Email: "brijesh@jalkruti.com",
		ProfielPhoto: teamMember3,
	},
	{
		Name: "Prof. Vimal Mishra",
		Designation: "Professor, IIT Gandhinagar",
		LinkedIn: "https://www.linkedin.com/in/vimal-mishra-21162265/",
		Twitter: "https://twitter.com/AmitPrashant2",
		Email: "vmishra@iitgn.ac.in",
		ProfielPhoto: teamMember4,
	},
	{
		Name: "Prof. Amit Prashant",
		Designation: "Professor, IIT Gandhinagar",
		LinkedIn: "https://www.linkedin.com/in/amit-prashant-3865271a9/",
		Twitter: "https://twitter.com/vmishraiit",
		Email: "ap@iitgn.ac.in",
		ProfielPhoto: teamMember5,
	},
]

const AboutPage = () => {
	return (
		<>

			<Head>
				<meta name="description" content="Jalkruti Water Solutions Private Limited" />
				<meta name="keywords" content="Jalkruti Water Solutions Private Limited, Water Solution" />
				<title>About</title>
			</Head>

			<PageTitle
				pageName="About Us"
				TagLine="Pioneering Water Engineering Excellence"
			/>



			<div id="about-block" className="about-us-block about-style-two pd-t-170">
				{/* <div className="container container-1200">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="section-title text-center">
								<h2 className="title-main">
									About
								</h2>
								<p className="sub-title">We work with you, Not for you</p>
							</div>
						</div>
					</div>
				</div> */}
				<div className="about-block-content">
					<div className="bg-image bg-overlay about-bg"
						style={{ background: "rgba(0, 0, 0, 0) url(" + backgroundImg.src + ")", backgroundBlendMode: "overlay" }}
					//    style="background-image:url('assets/images/bg/about-bg.jpg')"
					>
					</div>
					<div className="container container-1200">
						<div className="row align-items-center flex-column-reverse flex-lg-row">
							<div className="col-md-10 col-lg-6">
								<div className="fanfact-promo-numbers">
									<div className="promo-number">
										<div className="odometer" data-odometer-final="117">0</div>
										<h4 className="promo-title">Happy Client</h4>
									</div>
									<div className="promo-number">
										<div className="odometer" data-odometer-final="20">0</div>
										<h4 className="promo-title">Years Experience</h4>
									</div>
									<div className="promo-number">
										<div className="odometer" data-odometer-final="16">0</div>
										<h4 className="promo-title">Award Wines</h4>
									</div>
									<div className="promo-number">
										<div className="odometer" data-odometer-final="156">0</div>
										<h4 className="promo-title">Project Complete</h4>
									</div>
								</div>
							</div>
							<div className="col-md-10 col-lg-6">
								<div className="about-content">
									<h3 className="heading">Who We Are</h3>
									<p>Jalkruti Water Solutions Private Limited is water engineering consulting firm. It provides services in dam engineering, barrage engineering, river hydrology, river hydraulics, river training works, e-flow, catchment area treatment, instrumentation, judo mechanical and hydro electrical, sea shore protection, estuarine aspects of river and river ecology, water resource management, inter-basin transfer of water, drainage planning, domestic water supply and water treatment, industrial water treatment and effluent handling, piped water supplies, water accounting and auditing including flow measurement, mapping of water resources, groundwater management, water conveyance systems design, Topography, bathymetry and marine survey using the latest technology and UAV manufacturing and services.</p>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>



			<div id="service-block" class="services-block pd-t-170">
				<div class="container container-1200">
					<div class="row justify-content-center">
						<div class="col-lg-8">
							<div class="section-title text-center">
								<h2 class="title-main">
									Our Values
								</h2>
								<p class="sub-title">Flowing with excellence</p>
							</div>
						</div>
					</div>

					<div class="row services-items-list gutters-30">


						<div class="col-lg-6 col-md-6">
							<div class="service-item">

								<div class="service-icon">
									<Image src={Takecharge} alt="Icon" />
								</div>

								<h3 class="title">Take Ownership</h3>

								<p>
									Approach every task as if the company were your own. Make decisive actions, solve problems actively, help others proactively, and prevent mistakes before they happen.
								</p>

							</div>

						</div>

						<div class="col-lg-6 col-md-6">
							<div class="service-item">

								<div class="service-icon">
									<Image src={BuildTrust} alt="Icon" />
								</div>

								<h3 class="title">Foster Trust</h3>

								<p>
									Earn trust daily with clients and teammates alike. Show respect, communicate openly, take responsibility for your actions, and fulfill your promises.
								</p>

							</div>

						</div>

						<div class="col-lg-6 col-md-6">
							<div class="service-item">

								<div class="service-icon">
									<Image src={ThriveTogether} alt="Icon" />
								</div>

								<h3 class="title">Collaborate and Grow</h3>

								<p>
									Work together to achieve more. Encourage teamwork, understand each other’s perspectives, and share knowledge, successes, and failures openly.
								</p>

							</div>

						</div>

						<div class="col-lg-6 col-md-6">
							<div class="service-item">

								<div class="service-icon">
									<Image src={Quality} alt="Icon" />
								</div>

								<h3 class="title">Aim for Excellence and Quality</h3>

								<p>
									Strive for the best in everything you do. Be innovative, learn from your experiences, and ensure every detail is perfect to deliver outstanding results.
								</p>

							</div>

						</div>



					</div>
				</div>
			</div>



			<div className="team-block pd-t-170 pd-b-170">
				<div className="container container-1200 ml-b-30">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="section-title text-center">
								<h2 className="title-main">
									Meet The Founders
								</h2>
								{/* <p className="sub-title">We work with you, Not for you</p> */}
							</div>

						</div>
					</div>

					<div className="row team-items-list gutters-30">


						{TeamData.slice(0, 3).map((item, index) => (
							<div key={index} className="col-lg-4 col-md-6">
								<div className="team-item">
									<figure className="team-thumb">
										<Image src={item.ProfielPhoto} alt="Team Member" />
									</figure>
									<div className="team-info">
										<p className="designation">{item.Designation}
										</p>
										<h3 className="team-name">
											{item.Name}
										</h3>

										<div class="social-status">

											<div class="entry-share">
												<div className="share">
													<a href={item.LinkedIn} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
													<a href={`mailto:${item.Email}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
													<a href={item.Twitter} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
												</div>
											</div>
										</div>


									</div>
								</div>
							</div>
						))}





					</div>


				</div>
			</div>


			<div className="team-block pd-t-170 pd-b-170">
				<div className="container container-1200 ml-b-30">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="section-title text-center">
								<h2 className="title-main">
									Supporting Members

								</h2>
								{/* <p className="sub-title">We work with you, Not for you</p> */}
							</div>

						</div>
					</div>

					<div className="row team-items-list gutters-30">
						{TeamData.slice(3, 5).map((item, index) => (
							<div key={index} className="col-lg-4 col-md-6">
								<div className="team-item">
									<figure className="team-thumb">
										<Image src={item.ProfielPhoto} alt="Team Member" />
									</figure>
									<div className="team-info">

										<h3 className="team-name">
											{item.Name}
										</h3>

										<p className="designation">{item.Designation}</p>

										<div class="social-status">

											<div class="entry-share">
												<div className="share">
													<a href={item.LinkedIn} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
													<a href={`mailto:${item.Email}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
													<a href={item.Twitter} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
												</div>
											</div>
										</div>


									</div>
								</div>
							</div>
						))}


					</div>


				</div>
			</div>







		</>
	)
}

export default AboutPage