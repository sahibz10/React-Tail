// src/components/Navbar.jsx

// Yeh file ek responsive navigation bar banati hai.
// Mobile aur desktop dono ke liye alag alag layout hai.

import React, { useState } from 'react';

// 'Logo' ek separate component hai jo company ka logo aur naam display karta hai.
const Logo = () => (
    <a href="#" className="flex items-center space-x-2">
        {/* SVG icon ke liye */}
        <svg className="h-8 w-auto text-blue-600" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 0 L32 16 16 32 L0 16 Z M16 4 L4 16 L16 28 L28 16" />
        </svg>
        {/* Company ka naam */}
        <span className="font-bold text-xl text-gray-800 whitespace-nowrap">Hi-soft</span>
    </a>
);

const Navbar = () => {
    // 'isMenuOpen' state mobile menu ke liye hai. True hone par menu dikhega.
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Navigation links ka array.
    const navLinks = ['Home', 'About Us', 'Contact Us', 'Complaints', 'Investor Charter'];

    return (
        // Header component jo sticky aur transparent hai (backdrop-blur-md).
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />
                
                {/* Desktop Menu: Yeh sirf medium screens aur usse upar dikhega. */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* navLinks array par map karke har link render kiya gaya hai. */}
                    {navLinks.map((link) => (
                        <a key={link} href="#" className="text-gray-600 hover:text-blue-600 font-medium">
                            {link}
                        </a>
                    ))}
                    {/* Login button */}
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button: Yeh sirf medium screens se niche dikhega. */}
                <button 
                    className="md:hidden text-gray-600 focus:outline-none" 
                    // Click karne par menu ka state toggle hoga.
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {/* isMenuOpen true hone par 'X' icon, nahi to 'hamburger' icon dikhega. */}
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Dropdown: isMenuOpen true hone par hi dikhega. */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-md px-6 py-4 border-t border-gray-200">
                    <div className="flex flex-col space-y-4 items-start">
                        {/* Mobile view ke liye links. */}
                        {navLinks.map((link) => (
                            <a key={link} href="#" className="text-gray-600 hover:text-blue-600 font-medium w-full">
                                {link}
                            </a>
                        ))}
                        {/* Mobile login button */}
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