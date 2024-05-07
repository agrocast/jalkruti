import Link from "next/link";
import React from "react";
import Image from "next/image";
import backgroundImg from "../public/images/bg/page-heading-bg.gif"


const PageTitle = ({ pageName, TagLine}) => {
	return (
		<div id="hero-block" className="hero-block bg-image bg-overlay overlay-image-one bg-parallax"
			style={{ background: "rgba(0, 0, 0, 0) url(" + backgroundImg.src + ")", backgroundBlendMode: "overlay" }}>
			{/* <div className="vector-image">
				<Image src={backgroundImg2} alt="Vector" />
			</div> */}
			
			{/* <div className="waves-effect bottom" style={{ backgroundImage: "url(" + backgroundImg1.src + ")" }}></div> */}


			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="hero-content-area">
							
							<h2 className="hero-title">
							{pageName}
							</h2>
							<div className="hero-desc">
								{TagLine}
							</div>

							{/* <ul className="hero-services">
			  <li>Ux/UI Designed</li>
			  <li>Developing</li>
			  <li>Marketing</li>
			</ul> */}
							{/* <Link href="/" className="btn btn-primary">Our Services</Link> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageTitle;
