import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const LoginCard = () => {
    const [phone, setPhone] = useState('');

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 w-full max-w-sm mx-auto">
            {/* Header with blue underline */}
            <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 pb-2 mb-2 border-b-2 border-blue-600 inline-block">
                    Login
                </h2>
            </div>

            {/* Welcome text */}
            <div className="mb-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-1">
                    Welcome,
                </h3>
                <p className="text-gray-500 text-sm">
                    Check today's stock recommendations.
                </p>
            </div>

            {/* Phone input */}
            <div className="mb-6">
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={phone => setPhone(phone)}
                    placeholder=""
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true,
                        id: 'phone'
                    }}
                    containerClass="w-full custom-phone-input"
                    inputClass="w-full !border-gray-300 !rounded-lg !text-base !py-3 !pl-14 !pr-4 !h-12"
                    buttonClass="!border-gray-300 !rounded-l-lg !bg-gray-50 !py-3 !h-12"
                    dropdownClass="!bg-white !border-gray-300 !rounded-lg !shadow-lg !z-50"
                    specialLabel=""
                />
            </div>

            {/* Login button */}
            <button
                disabled={!phone || phone.length < 10}
                className={`w-full font-bold py-3 px-4 rounded-md transition-colors ${
                    !phone || phone.length < 10
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
            >
                Login
            </button>

            {/* Footer text */}
            <p className="text-xs text-gray-500 mt-6 text-center">
                All the recommendations are provided by our Hi-soft team. <br />
                <a href="#" className="text-blue-600 hover:underline">SEBI Registered RA - INH000013475</a>
            </p>
        </div>
    );
};

export default LoginCard;