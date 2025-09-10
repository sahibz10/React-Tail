// src/components/HeroSection.jsx

import React from 'react';
import LoginCard from './Login';
import { FaAndroid, FaApple } from 'react-icons/fa'

// Icons for the buttons
;
const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>;

const HeroSection = () => {
    return (
        <div className="container mx-auto px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center bg-yellow-100 text-yellow-800 text-sm font-bold px-4 py-1 rounded-full mb-6">
                        <span className="mr-2">⭐</span>
                        Trusted by Profitable Investors
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
                        SEBI Registered <br />
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            STOCK Advisors
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                        Multyfi delivers more than 80% accurate stock recommendations for smarter investments and better returns.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#" className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors shadow-lg">
                            <DashboardIcon />
                            Go to Dashboard
                        </a>
                    </div>
                    <a href="#" className="inline-block mt-4 text-sm text-gray-500 hover:text-blue-600 hover:underline">
                        View SEBI Certificate
                    </a>

                    {/* <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                        <a href="#" className="text-gray-600 font-medium hover:text-black">Download Android</a>
                        <a href="#" className="text-gray-600 font-medium hover:text-black">Download iOS</a>
                    </div> */}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="text-center lg:text-left flex flex-col justify-center h-full">
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <a href="#" className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-black transition-colors">
                                <FaAndroid className="h-6 w-6" />
                                Download Android</a>
                            <a href="#" className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-black transition-colors">
                                <FaApple className="h-6 w-6" />
                                Download iOS
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex justify-center lg:justify-end items-center h-full">
                    <LoginCard />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;