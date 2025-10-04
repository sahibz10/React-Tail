import React from 'react';

// 'cardsData' array mein har card ka data store kiya gaya hai.
const cardsData = [
    {
        title: "Equity Trades",
        description: "Stock market trades with short to medium-term investment strategies."
    },
    {
        title: "Future Trades",
        description: "Trading recommendations on futures contracts with potential high returns."
    },
    {
        title: "Options Trades",
        description: "Expert analysis and strategies for trading stock and index options."
    },
    {
        title: "Commodities Trades",
        description: "Insights and trade calls for commodities like gold, silver, and crude oil."
    }
];

const WhatYouGet = () => {
    return (
        <section className="container mx-auto px-6 py-16 md:py-24 text-center">
            {/* Header aur tagline */}
            <p className="text-gray-500 font-semibold uppercase text-sm mb-2">
                UNLOCK PROFITABLE INVESTMENTS WITH EXPERT STRATEGIES!
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
                What Do You Get
            </h2>

            {/* Grid layout mein cards render ho rahe hain. */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* cardsData array par map karke har card ko render kiya gaya hai. */}
                {cardsData.map((card, index) => (
                    <div
                        key={index} // Har card ke liye unique key.
                        className="bg-gradient-to-br from-blue-100 to-white via-blue-50 p-8 rounded-2xl shadow-lg border border-gray-200 transition-transform transform hover:scale-105"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                            {card.title}
                        </h3>
                        <p className="text-gray-600">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatYouGet;