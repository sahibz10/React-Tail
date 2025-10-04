import React from 'react';

// 'HowToUse' component ek YouTube video player ko display karta hai.
const HowToUse = () => {
    // YouTube video ka embed URL. "PoocXxQZvgI" video ki ID hai.
    const videoEmbedUrl = "https://www.youtube.com/embed/PoocXxQZvgI?si=f00tzixCorrExmfM";

    return (
        <section className="container mx-auto px-6 py-16 md:py-24 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
                How to Use?
            </h2>

            {/* Video container jise responsive banaya gaya hai. */}
            {/* 'pt-[56.25%]' property se 16:9 aspect ratio maintain kiya gaya hai. */}
            <div className="relative overflow-hidden pt-[56.25%] rounded-3xl shadow-xl">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={videoEmbedUrl} // Video ka source URL.
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