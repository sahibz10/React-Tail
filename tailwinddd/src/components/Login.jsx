import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const LoginCard = () => {
    const [phone, setPhone] = useState('');

    return (
        <div className="bg-white p-6 w-full max-w-sm mx-auto">
            {/* Header with blue underline */}
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-700 mb-1">
                    Login
                </h2>
                <div className="w-full h-1 bg-blue-500 rounded-full"></div>
            </div>

            {/* Welcome text */}
            <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Welcome,
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
                    containerClass="w-full"
                    inputClass="!w-full !border-gray-300 !rounded-lg !text-lg !py-3 !pl-14 !pr-4 !h-13"
                    buttonClass="!border-gray-300 !rounded-l-lg !bg-gray-50 !py-3 !h-13"
                    dropdownClass="!bg-white !border-gray-300 !rounded-lg !shadow-lg !z-50"
                    specialLabel=""
                    containerStyle={{
                        width: '100%',
                        marginBottom: '0'
                    }}
                    inputStyle={{
                        width: '100%',
                        height: '52px',
                        fontSize: '16px',
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        paddingLeft: '60px',
                        paddingRight: '16px',
                        outline: 'none',
                        transition: 'all 0.2s ease'
                    }}
                    buttonStyle={{
                        border: '1px solid #d1d5db',
                        borderRadius: '8px 0 0 8px',
                        backgroundColor: '#f9fafb',
                        height: '52px',
                        width: '52px'
                    }}
                    searchStyle={{
                        width: '100%',
                        padding: '8px 12px',
                        fontSize: '14px'
                    }}
                />
            </div>

            {/* Login button */}
            <button
                disabled={!phone || phone.length < 10}
                className={`w-full font-semibold py-4 px-4 rounded-lg transition-all duration-200 text-lg ${
                    !phone || phone.length < 10
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-400 text-gray-700 hover:bg-gray-500 hover:text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                    }`}
                onClick={() => {
                    if (phone && phone.length >= 10) {
                        console.log('Login attempt with phone:', phone);
                        // Add your login logic here
                    }
                }}
            >
                Login
            </button>

            {/* Footer text */}
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    All the recommendations are provided by our Hi-soft team.
                </p>
                <a 
                    href="#" 
                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors duration-200"
                    onClick={(e) => e.preventDefault()}
                >
                    SEBI Registered RA - INH000013475
                </a>
            </div>
        </div>
    );
};

export default LoginCard;