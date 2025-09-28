import React from 'react';
import yourImage from '../assets/image.png';

// Define the feature data in a single array
const features = [
  {
    title: "Accurate Forecasts",
    description: "Leveraging AI-driven models to predict market trends with unparalleled accuracy.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m1.5 1.5L5.25 17.25m8.25-6.75h9m-9-3.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
  },
  {
    title: "Fundamentally Strong Stocks",
    description: "Identifying stocks with solid financials, robust growth prospects, and big edge.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.104c.73-.147 1.474-.271 2.226-.393M17.25 18.75H4.5m15.75 0H218.75a60.07 60.07 0 0115.797 2.104c.73-.147 1.474-.271 2.226-.393M17.25 18.75H4.5m15.75 0H218.75a60.07 60.07 0 0115.797 2.104c.73-.147 1.474-.271 2.226-.393M17.25 18.75H4.5m15.75 0a60.07 60.07 0 01-15.797 2.104c-.73-.147-1.474-.271-2.226-.393M18.75 18.75v-12.375m0 0a3.75 3.75 0 10-7.5 0M18.75 18.75H4.5m15.75 0a60.07 60.07 0 01-15.797 2.104c-.73-.147-1.474-.271-2.226-.393m0 0v-5.25m0 0a3.75 3.75 0 10-7.5 0M18.75 18.75v-12.375m0 0a3.75 3.75 0 10-7.5 0" />
      </svg>
    ),
  },
  {
    title: "Quants Recommended Stocks",
    description: "Top picks from our quants strategies for high-potential stock investments.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07 1.014 4.383.183l.363-.214a1.5 1.5 0 00.152-2.217l-.527-.677m-.527-.677l-.363-.214A1.5 1.5 0 0112 8.75" />
      </svg>
    ),
  },
];

const WhatWeDo = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text Content */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
            VISUALIZING SUCCESS
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8">
            What We Do?
          </h3>
          
          {features.map((feature, index) => (
            <div key={index} className="flex items-start mb-6">
              {/* Feature Icon */}
              {feature.icon}
              
              {/* Feature Text */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center lg:justify-end">
          <img 
            src={yourImage} // You will need to put your image here
            alt="Multyfi app dashboard showing stock recommendations"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;