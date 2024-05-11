import Link from "next/link";
import React from "react";
import Image from "next/image";
import backgroundImg from "../public/images/bg/page-heading-bg.gif"


const PageTitle = ({ pageName, TagLine }) => {
	return (
		<div id="page_banner" className="hero-block bg-image bg-overlay overlay-image-one bg-parallax"
			style={{ background: "rgba(0, 0, 0, 0) url(" + backgroundImg.src + ")", backgroundBlendMode: "overlay", height: "100px" }}>

			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<h2 className="hero-title">
							{pageName}
						</h2>
						<div className="hero-desc">
							{TagLine}
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default PageTitle;
