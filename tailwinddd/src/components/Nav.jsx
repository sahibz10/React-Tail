// src/components/Navbar.jsx

import React from 'react';

// A simple placeholder for the logo
const Logo = () => (
    <div className="flex items-center space-x-2">
        <svg className="h-8 w-auto text-blue-600" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 0 L32 16 L16 32 L0 16 Z M16 4 L4 16 L16 28 L28 16 Z"/>
        </svg>
        <span className="font-bold text-xl text-gray-800">MULTYFI</span>
    </div>
);

const Navbar = () => {
    const navLinks = ['Home', 'About Us', 'Contact Us'];

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link} href="#" className="text-gray-600 hover:text-blue-600 font-medium">
                            {link}
                        </a>
                    ))}
                </div>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                    Login
                </button>
            </nav>
        </header>
    );
};

export default Navbar;