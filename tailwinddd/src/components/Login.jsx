import React, { useState } from 'react';
// Phone number input field ke liye library import ki gayi hai.
import PhoneInput from 'react-phone-input-2';
// Library ki CSS file.
import 'react-phone-input-2/lib/style.css';

const LoginCard = () => {
  // 'phone' state variable phone number store karta hai.
  const [phone, setPhone] = useState('');

  return (
    <div className="bg-white rounded-2xl shadow-lg max-w-xl mx-auto p-8">
      {/* Header section */}
      <div className="text-left mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Login</h1>
        <div className="w-24 border-b-4 border-blue-500 mt-2 rounded-full"></div>
      </div>
      {/* Welcome message */}
      <div className="text-left mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome,</h2>
        <p className="text-xl text-gray-500 font-medium">Check today's stock recommendations.</p>
      </div>
      {/* Phone Input Field component */}
      <div className="w-full mb-8">
        <PhoneInput
          country={'in'} // Default country 'India' set kiya gaya hai.
          value={phone} // State se value control hoti hai.
          onChange={setPhone} // Jab bhi input change hota hai, state update hoti hai.
          inputProps={{
            name: 'phone',
            required: true,
            id: 'phone',
            autoFocus: true,
            autoComplete: 'tel',
          }}
          // Tailwind CSS classes ko override karke style kiya gaya hai.
          containerClass="!w-full"
          inputClass="!w-full !border !border-blue-300 !rounded-lg !text-xl !py-3 !pl-14 !pr-12 !focus:outline-none !focus:ring !focus:ring-blue-300"
          buttonClass="border border-blue-300 bg-gray-50 py-3"
          dropdownClass="bg-white"
        />
      </div>
      {/* Disabled Login Button */}
      <button
        // Button disabled hai, jab tak user kuch input nahi karta ya koi aur logic nahi hai.
        className="w-full bg-gray-100 text-gray-400 font-bold text-2xl py-4 rounded-xl mb-6 cursor-not-allowed"
        disabled
      >
        Login
      </button>
      {/* Recommendations aur SEBI registration ke baare mein text. */}
      <div className="text-center text-base text-gray-500 mb-2">
        All the recommendations are provided by our Hi-soft team.
      </div>
      <div className="text-center mb-2">
        <a className="text-blue-600 font-semibold underline text-base" href="#">
          SEBI Registered RA - INH000013475
        </a>
      </div>
    </div>
  );
};

export default LoginCard;