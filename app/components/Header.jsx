
'use client'
import React from "react";


const Header = () => {
    return (
        <>
        {/* Video container */}
        <div className="video-container">
                        <video preload="metadata" autoPlay muted loop playsInline>
                            <source src="./videos/hero.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {/* Overlay content on top of the video */}
                        <div className="overlay-content">
                            <h2 className="oc"   style={{  }}>
                            Nurturing Fields of Tomorrow Weaving Worldwide Pathways of Prosperity
                            

                            </h2>
                        </div>
                    </div>
        </>
    )
}

export default Header
