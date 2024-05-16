import React from 'react'
import teamMember1 from "../public/images/team/1.jpg"
import teamMember2 from "../public/images/team/2.jpg"
import teamMember3 from "../public/images/team/3.jpg"
import teamMember4 from "../public/images/team/4.jpg"
import teamMember5 from "../public/images/team/5.jpg"
import Image from 'next/image'
import backgroundImg from "../public/images/bg/about-bg.jpg"
import PageTitle from '../components/PageTitle'
import Head from 'next/head'
import Footer from '../components/Footer'
import dynamic from 'next/dynamic'




const TeamData = [
	{
		Name: "Vivek Kapadia",
		Designation: "Director",
		Title: "",
		LinkedIn: "https://www.linkedin.com/in/vivek-kapadia-77678116a/",
		Twitter: "https://twitter.com/VivekPKapadia",
		Email: "vivek@jalkruti.com",
		ProfielPhoto: teamMember1,
	},
	{
		Name: "Harsh Shah",
		Designation: "Director",
		Title: "",
		LinkedIn: "https://www.linkedin.com/in/harsh-shah-77595179/",
		Twitter: "https://twitter.com",
		Email: "harsh@jalkruti.com",
		ProfielPhoto: teamMember2,
	},
	{
		Name: "Brijesh Patel",
		Designation: "Director",
		Title: "",
		LinkedIn: "https://www.linkedin.com/in/brijesh-patel-3a698918/",
		Twitter: "https://twitter.com",
		Email: "brijesh@jalkruti.com",
		ProfielPhoto: teamMember3,
	},
	{
		Name: "Vimal Mishra",
		Designation: "Advisor",
		Title: "Professor, IIT Gandhinagar",
		LinkedIn: "https://www.linkedin.com/in/vimal-mishra-21162265/",
		Twitter: "https://twitter.com/AmitPrashant2",
		Email: "vmishra@iitgn.ac.in",
		ProfielPhoto: teamMember4,
	},
	{
		Name: "Amit Prashant",
		Designation: "Advisor",
		Title: "Professor, IIT Gandhinagar",
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
				<title>About | Jalkruti Water Solutions</title>
			</Head>

			<PageTitle
				pageName="Excelling Water Resource Engineering and Management"
				TagLine=""
			/>



			<div className="about-us-block about-style-two pd-t-50">
			<div class="container">
				<div className='row'>
					<div className='col-md-6'>
						<div className='about_img' style={{ width: "100%" }}>
							{/* <Image src={backgroundImg} alt='about-img' /> */}
							
							<video controls loop muted autoPlay >
                            <source src="/images/about-video.mp4" type="video/mp4" />
                        </video>

						</div>
					</div>

					<div className='col-md-6'>
						<div className='about_content'>
							<div className=''>
								<h3 className="heading">Our Mission</h3>
								<p style={{ textAlign: "justify" }}>
								We view water holistically. For us, Integrated Water Resource Management is not merely a concept; rather, it is a healthy practice. We believe engineering is an art of adapting nature; and, any effort to conquer it is disastrous. Therefore, to us, water engineering is for serving ecology and mankind, living and non-living (so-called). We religiously believe that so long as the hydraulic cycle runs uninterruptedly, this earth would exist. A strong team having vast experience and deep knowledge in all the domains of water resource engineering and management in particular and of Civil Engineering in general is capable of providing solutions of very complex problems. We trust, our mission and endeavours would be welcomed, appreciated and engaged by the water sector of India.     
								</p>
							</div>

						</div>

					</div>
				</div>
				</div>

			</div>




			{/* <div id="service-block" class="services-block pd-t-170" >
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
			</div> */}



			<div className="team-block pd-t-130 pd-b-100">
				<div className="container container-1200 ml-b-30">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="section-title text-center">
								<h2 className="title-main">
									Team Jalkruti
								</h2>
								{/* <p className="sub-title">We work with you, Not for you</p> */}
							</div>

						</div>
					</div>

					<div className="team-items-list gutters-30" >


						{TeamData.map((item, index) => (
							<div key={index} className='team_container'>
								<div className="team-item" style={{ border: "1px solid #cfcfcf", minHeight: "100%" }}>
									<figure className="team-thumb" style={{ borderBottom: "0.5px solid grey" }}>
										<Image src={item.ProfielPhoto} alt="Team Member" />
									</figure>
									<div className="team-info" style={{ minHeight: "120px" }}>


										<p className="designation">
											{item.Title}
										</p>

										<p className="designation">
											<strong>
												{item.Designation}

											</strong>
										</p>

										<h3 className="team-name">
											{item.Name}
										</h3>

									</div>

									<div class="social-status">

										<div class="entry-share">
											<div className="share">
												<a href={item.LinkedIn} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
												{/* <a href={`mailto:${item.Email}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-o" aria-hidden="true"></i></a> */}
												{/* <a href={item.Twitter} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a> */}
											</div>
										</div>
									</div>



								</div>
							</div>
						))}





					</div>


				</div>
			</div>


			{/* <div className="team-block pd-t-170 pd-b-170" data-aos="fade-up">
				<div className="container container-1200 ml-b-30">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="section-title text-center">
								<h2 className="title-main">
									Supporting Members

								</h2>
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
			</div> */}






			<Footer />


		</>
	)
}

export default AboutPage
