// src/components/LoginCard.jsx

import React from 'react';

const LoginCard = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 w-full max-w-md">
      <h2 className="text-xl font-semibold text-gray-800 pb-2 mb-6 border-b-2 border-blue-600 inline-block">
        Login
      </h2>
      <p className="text-gray-600 mb-1 font-medium">Welcome,</p>
      <p className="text-gray-500 mb-6 text-sm">Check today's stock recommendations.</p>
      
      <div className="mb-6">
        <label htmlFor="phone" className="sr-only">Phone Number</label>
        <div className="relative flex items-center">
          <div className="absolute left-0 pl-3 flex items-center pointer-events-none">
            <span role="img" aria-label="India flag">🇮🇳</span>
            <span className="text-gray-500 ml-2 text-sm">+91</span>
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full pl-20 pr-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="(702) 123-4567"
          />
        </div>
      </div>
      
      <button
        disabled
        className="w-full bg-gray-200 text-gray-500 font-bold py-3 px-4 rounded-md cursor-not-allowed"
      >
        Login
      </button>
      
      <p className="text-xs text-gray-500 mt-6 text-center">
        All the recommendations are provided by our Multyfi team. <br/>
        <a href="#" className="text-blue-600 hover:underline">SEBI Registered RA - INH000013475</a>
      </p>
    </div>
  );
};

export default LoginCard;