
import React from 'react';

const HowToUse = () => {
    // This is the embed URL for a YouTube video.
    // Replace "VIDEO_ID_HERE" with the actual ID of your video.
    const videoEmbedUrl = "https://www.youtube.com/embed/PoocXxQZvgI?si=f00tzixCorrExmfM";

    return (
        <section className="container mx-auto px-6 py-16 md:py-24 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
                How to Use?
            </h2>

            <div className="relative overflow-hidden pt-[56.25%] rounded-3xl shadow-xl">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={videoEmbedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};

export default HowToUse;