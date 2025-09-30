// src/components/Navbar.jsx

// src/components/Navbar.jsx

import React from 'react';


const Logo = () => (
    <a href="#" className="flex items-center space-x-2">
        <svg className="h-8 w-auto text-blue-600" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 0 L32 16 16 32 L0 16 Z M16 4 L4 16 L16 28 L28 16" />
        </svg>
        <span className="font-bold text-xl text-gray-800">Hi-soft</span>
    </a>
);

const Navbar = () => {
    // Nav links updated to match the new design
    const navLinks = ['Home', 'About Us', 'Contact Us', 'Complaints', 'Investor Charter'];

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (                 //  this automatically creating a nav link for every item in list.
                        <a key={link} href="#" className="text-gray-600 hover:text-blue-600 font-medium">
                            {link}
                        </a>
                    ))}
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                        Login
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;