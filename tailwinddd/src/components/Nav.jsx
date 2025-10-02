// src/components/Navbar.jsx

// src/components/Navbar.jsx

// src/components/Navbar.jsx

import React, { useState } from 'react';

const Logo = () => (
    <a href="#" className="flex items-center space-x-2">
        <svg className="h-8 w-auto text-blue-600" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 0 L32 16 16 32 L0 16 Z M16 4 L4 16 L16 28 L28 16" />
        </svg>
        <span className="font-bold text-xl text-gray-800 whitespace-nowrap">Hi-soft</span>
    </a>
);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ['Home', 'About Us', 'Contact Us', 'Complaints', 'Investor Charter'];

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link} href="#" className="text-gray-600 hover:text-blue-600 font-medium">
                            {link}
                        </a>
                    ))}
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-gray-600 focus:outline-none" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-md px-6 py-4 border-t border-gray-200">
                    <div className="flex flex-col space-y-4 items-start">
                        {navLinks.map((link) => (
                            <a key={link} href="#" className="text-gray-600 hover:text-blue-600 font-medium w-full">
                                {link}
                            </a>
                        ))}
                        <button className="w-full text-left bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                            Login
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;