import React, { useRef } from 'react';
// Yeh images ke imports hain. Inhe actual trade images se replace karna hoga.
import tradeImage1 from '../assets/card1.png';
import tradeImage2 from '../assets/card2.png';
import tradeImage3 from '../assets/card3.png';
import tradeImage4 from '../assets/card4.png';
// import tradeImage5 from '../assets/card5.png';
import tradeImage6 from '../assets/card6.png';
import tradeImage7 from '../assets/card7.png';


// Har trade card ke liye placeholder data.
const trades = [
  {
    image: tradeImage1,
    timeframe: 'T-TERM',
    metrics: [
      { label: 'BUY', value: '214-220' },
      { label: 'SELL', value: '280-285' },
    ],
  },
  {
    image: tradeImage2,
    timeframe: '3 MONTHS',
    metrics: [
      { label: 'BUY', value: '710-715' },
      { label: 'SELL', value: '840-855' },
    ],
  },
  {
    image: tradeImage3,
    timeframe: '4-5 WEEKS',
    metrics: [
      { label: 'BUY', value: '303-309' },
      { label: 'SELL', value: '367-375' },
    ],
  },
  {
    image: tradeImage4,
    timeframe: '3-5 DAYS',
    metrics: [
      { label: 'BUY', value: '510-522' },
      { label: 'SELL', value: '567-573' },
    ],
  },
//   {
//     image: tradeImage5,
//     timeframe: 'SHORT TERM',
//     metrics: [
//       { label: 'BUY', value: '450-465' },
//       { label: 'SELL', value: '520-535' },
//     ],
//   },

  {
    image: tradeImage6,
    timeframe: 'SHORT TERM',
    metrics: [
      { label: 'BUY', value: '800-465' },
      { label: 'SELL', value: '520-445' },
    ],
  },

  {
    image: tradeImage7,
    timeframe: 'SHORT TERM',
    metrics: [
      { label: 'BUY', value: '460-465' },
      { label: 'SELL', value: '230-535' },
    ],
  },
];

// 'LiveTrades' component ek horizontally scrollable card slider banata hai.
const LiveTrades = () => {
  // 'scrollContainerRef' se slider container ka reference liya gaya hai.
  const scrollContainerRef = useRef(null);

  // Yeh function button click par slider ko left mein scroll karta hai.
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: 'smooth',
      });
    }
  };

  // Yeh function button click par slider ko right mein scroll karta hai.
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      {/* Section ka header aur description */}
      <div className="text-center mb-12">
        <p className="text-gray-500 font-semibold uppercase text-sm mb-2">Buy/Sell Recommendations</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">Live Trades</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Get Buy/Sell/Hold recommendations on over 2000 stocks
        </p>
      </div>

      <div className="relative">
        {/* Left Scroll Arrow button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          {/* SVG icon for left arrow */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Scroll Arrow button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          {/* SVG icon for right arrow */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slider Container jise scroll kiya jayega. */}
        <div
          ref={scrollContainerRef} // Ref ko is container se joda gaya hai.
          // overflow-x-auto, snap, aur hide-scrollbar se horizontal scrolling aur snapping functionality aati hai.
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 md:gap-8 py-4 px-6 md:px-12"
        >
          {/* trades array par map karke har trade card render kiya gaya hai. */}
          {trades.map((trade, index) => (
            <div key={index} className="flex-shrink-0 snap-center w-64 md:w-80 lg:w-96">
              {/* Card ka main div */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                <div className="relative">
                  {/* Trade ki image */}
                  <img src={trade.image} alt="Live Trade" className="w-full object-cover" />
                  
                  {/* Top par 'timeframe' pill */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    {trade.timeframe}
                  </div>

                  {/* Lock icon */}
                  <div className="absolute top-4 right-4 bg-gray-200 bg-opacity-75 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2h2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2h2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Image ke niche ka content */}
                <div className="p-6 text-center">
                  <h4 className="text-gray-800 font-bold text-lg mb-4">
                    {/* Gradient text */}
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      Unlock Now
                    </span>
                  </h4>
                  {/* BUY/SELL metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {trade.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <span className="text-sm font-semibold text-gray-500">{metric.label}</span>
                        <span className="text-gray-800 font-bold">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Unlock Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveTrades;