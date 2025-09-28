import React from 'react';
import { clientLogos } from './ClientLogos';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Clients = () => {
  // We duplicate the logos to create a seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  // Handler function for logo clicks
  const handleLogoClick = (logoName) => {
    console.log(`${logoName} was clicked!`);
    // You can add more functionality here, like navigating to a page
    // or opening a modal with details about the client.
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6"> {/* Added horizontal padding */}
        {/* Main container. Use a flex-col for mobile, and flex-row for larger screens */}
        <div className="relative bg-[#0d2857] flex flex-col md:flex-row items-center h-auto md:h-24 py-4 md:py-0 rounded-lg shadow-lg">
          
          {/* "Our Clients" Tab */}
          <div className="relative bg-[#f04e43] text-white font-bold text-lg px-6 py-2 md:pl-8 md:pr-16 z-10 w-full md:w-auto text-center md:text-left rounded-t-lg md:rounded-t-none md:rounded-l-lg">
            Our Clients
            {/* The angled divider is hidden on mobile for simplicity */}
            <div
              className="hidden md:block absolute top-0 right-0 h-full w-16 bg-[#0d2857]"
              style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
            >
              <div 
                className="h-full w-full bg-[#f04e43]" 
                style={{ clipPath: 'ellipse(100% 50% at 100% 50%)' }}
              />
            </div>
          </div>

          {/* Slider Mask */}
          <div className="flex-1 overflow-hidden w-full py-4 md:py-0">
            <div className="flex animate-logo-scroll items-center">
              {duplicatedLogos.map((Logo, index) => (
                <div 
                  key={index}
                  onClick={() => handleLogoClick(Logo.type.name)} // Pass the logo name to the handler
                  className="flex-shrink-0 mx-8 md:mx-12 text-white opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                >
                  {Logo}
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies Button */}
          <div className="pr-4 md:pr-8 z-10 flex-shrink-0 mt-4 md:mt-0 w-full md:w-auto text-center">
            <a href="#" className="relative flex items-center justify-center text-white font-semibold">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#f04e43] opacity-75 animate-pulse"></span>
              <span className="relative flex items-center justify-center bg-[#f04e43] rounded-full py-3 px-5 whitespace-nowrap">
                Case Studies <ArrowIcon />
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clients;