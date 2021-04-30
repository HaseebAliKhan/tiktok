import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar"

function Video({url,channel,description,song,likes,shares, messages}) {
    const [ playing, setPlaying] =useState(false);
    const videoRef =useRef(null)

const handleVideoPress = () => {
    if (playing){
        videoRef.current.pause();
        setPlaying(false);
    } else {
        videoRef.current.play();
        setPlaying(true);
    }
    
}

    return (
        <div className="video">
            <video
            className="video__player"
            onClick={handleVideoPress}
            ref={videoRef}
            loop
            src={url}></video>


            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
            {/* VideoSidebar */}
        </div>
    )
}

export default Video
