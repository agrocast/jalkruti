// "use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
    // video path
    let videosrc = "/images/about-video.mp4";

    return (
        <>
            {/* <ReactPlayer
                width="100%"
                height="100%"
                url={videosrc}
                controls={true}
                pip={true}
                playing={true} // Autoplay enabled
            /> */}
             <video loop muted autoPlay>
                            <source src={videosrc} type="video/mp4" />
                        </video>
                        
            {/* <source src={videosrc} type="video/mp4" /> */}
        </>
    );
};

export default VideoPlayer;
