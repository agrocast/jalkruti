import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ImageSlideshow = ({ images }) => {
    var settings = {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "rgba(0,0,0,0.2)",
                    // borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        //   customPaging: i => (
        //     <div
        //       style={{
        //         // width: "30px",
        //         // color: "black",
        //         border: "1px black solid"
        //       }}
        //     >
        //       {i + 1}
        //     </div>
        //   ),
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                {images.map((item, index) => (
                    <div key={index} className=''>
                        <Image src={item} alt="Slider Image" />
                    </div>
                ))}

            </Slider>
        </div>


    )
}

export default ImageSlideshow