import React from 'react';
import '../../src/styles/globals.css';
import video from '../../src/assets/videos/splash.mp4';

const Splash = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',

                overflow: 'hidden',
            }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    // width: '100%',
                    // height: '100%',
                    objectFit: 'cover',
                }}
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Splash;
