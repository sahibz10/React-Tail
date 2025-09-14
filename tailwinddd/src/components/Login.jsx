// src/components/LoginCard.jsx
import React, { useState } from 'react';
// import 'react-phone-input-2/lib/style.css'; // humne library import ki
import PhoneInput from 'react-phone-input-2'; // then main component uss library se

const LoginCard = () => {

    const [phone, setPhone] = useState('');
    // phone variable banaya jo phone number store karega.
    // setPhone function hai jo phone variable ko update karega.


    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 pb-2 mb-6 border-b-2 border-blue-600 inline-block">
                Login
            </h2>
            <p className="text-gray-600 mb-1 font-medium">Welcome,</p>
            <p className="text-gray-500 mb-6 text-sm">Check today's stock recommendations.</p>
            <div className="mb-6">
                <label htmlFor="phone" className="sr-only">Phone Number</label>

                <PhoneInput
                    country={"in"} // Default country code
                    value={phone} // Current value of the phone input
                    onChange={phone => setPhone(phone)} // Function to handle changes in the input
                    placeholder="Enter your phone number"
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true
                    }}
                    containerClass="w-full"
                    inputClass="w-full py-3 pr-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>


            <button
                disabled={!phone || phone.length < 10} // Button tabhi enable hoga jab phone variable me kuch value hogi    
                className={`w-full font-bold py-3 px-4 rounded-md transition-colors ${
                    !phone || phone.length < 10
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed' // Disabled style
                        : 'bg-blue-600 text-white hover:bg-blue-700' // Enabled style
                    }`}
            >
                Login
            </button>

            <p className="text-xs text-gray-500 mt-6 text-center">
                All the recommendations are provided by our Multyfi team. <br />
                <a href="#" className="text-blue-600 hover:underline">SEBI Registered RA - INH000013475</a>
            </p>
        </div>
    );
};

export default LoginCard;