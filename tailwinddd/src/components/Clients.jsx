import React, { useRef } from 'react';
import { clientLogos } from './ClientLogos';

const Clients = () => {
  // Seamless loop ke liye logos ke array ko duplicate kiya gaya hai.
  // Animation is duplicated array par scroll karega, jisse jab pehle logos
  // screen se bahar jayenge, to dusra set wahin par ready hoga loop ko continue karne ke liye.
  const duplicatedLogos = [...clientLogos, ...clientLogos];
  
  // Slider ke DOM element ka direct reference paane ke liye useRef hook ka use kiya gaya hai.
  // Isse hum animation ko programmatically control kar sakte hain (pause/resume).
  const sliderRef = useRef(null);

  // Jab mouse slider area par aata hai, to CSS animation ko pause karo.
  const handleMouseEnter = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'paused';
    }
  };

  // Jab mouse slider area se bahar jata hai, to CSS animation ko resume karo.
  const handleMouseLeave = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'running';
    }
  };

  // Animation ka duration define kiya gaya hai. Isse responsive bhi banaya ja sakta hai.
  const animationDuration = '25s';

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Clients</h2>
        {/* Parent container par overflow-hidden property logos ko chhupa deti hai
            jab wo screen se bahar slide karte hain, jisse horizontal scrollbar nahi aata. */}
        <div className="relative overflow-hidden">
          {/* Yeh wo container hai jisme saare logos hain aur jo animate ho raha hai. */}
          <div
            ref={sliderRef} // Is element ko ref se joda gaya hai.
            className="flex space-x-12 animate-logo-scroll"
            style={{
              // CSS animation ko specified duration ke saath apply kiya gaya hai.
              animation: `logo-scroll ${animationDuration} linear infinite`,
            }}
            onMouseEnter={handleMouseEnter} // Hover par animation pause karega.
            onMouseLeave={handleMouseLeave} // Mouse hatane par animation resume karega.
          >
            {/* Har logo ko render karne ke liye duplicated array par map kiya gaya hai. */}
            {duplicatedLogos.map((Logo, i) => (
              <div
                key={i} // Har logo element ke liye unique key.
                className="flex-shrink-0 mx-4 md:mx-8 text-gray-700 opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer transform hover:scale-105 duration-200"
                onClick={() => console.log(`Clicked: ${Logo.type?.name}`)}
              >
                {/* Logo component ko render kiya gaya hai. */}
                {Logo}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors"
          >
            Case Studies
          </a>
        </div>
      </div>
      {/*
        Yeh custom CSS animation ke liye ek embedded style block hai.
        @keyframes 'logo-scroll' naam ki animation ko define karta hai.
        0% { transform: translateX(0); } - Animation ka starting point (koi horizontal translation nahi).
        100% { transform: translateX(-50%); } - Animation ka ending point. Yeh content ko left mein
        container ki total width ke 50% se move karta hai, jisse seamless looping effect banta hai.
      */}
      <style>{`
        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Clients;