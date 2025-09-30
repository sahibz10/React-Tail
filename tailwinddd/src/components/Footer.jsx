import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Placeholder QR code images. You'll need to add your own.
import qrCode1 from '../assets/appstoreqr.png';
import qrCode2 from '../assets/playstoreq4.png';
// import logo from '../assets/logomultify.svg';
import hilogo from '../assets/hi-soft.png';

const Footer = () => {
    const footerLinks = {
        multyfi: ['About us', 'Contact us', 'FAQs'],
        legal: ['Privacy Policy', 'Disclaimer and Disclosures', 'Terms & Conditions', 'MITC', 'Refund Policy', 'SEBI RA Policy'],
        regulations: ['Complaints', 'Expectations', 'Grievance', 'Internal Policy', 'Investor Charter', 'Research Rationale'],
    };

    const socialIcons = [
        { icon: <FaFacebook />, link: '#' },
        { icon: <FaInstagram />, link: '#' },
        { icon: <FaLinkedin />, link: '#' },
        { icon: <FaTwitter />, link: '#' },
    ];

    return (
        <footer className="bg-[#f7f8fc] py-16 text-gray-700">
            <div className="container mx-auto px-6">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <img src={hilogo} alt="Hi-soft Logo" className="h-10 w-auto" />
                        </div>
                        <p className="text-sm max-w-lg mb-4">
                            Hi-Soft is a SEBI registered stock advisor, which tells its customers what stock to buy and when to buy.
                        </p>
                    </div>

                    {/* Social Icons Section */}
                    <div className="md:col-span-1 lg:col-span-2 text-left md:text-right">
                        <h4 className="text-gray-900 font-bold mb-4 uppercase text-sm">Follow Us On</h4>
                        <div className="flex space-x-4 md:justify-end">
                            {socialIcons.map((item, index) => (
                                <a key={index} href={item.link} className="text-gray-500 hover:text-blue-600 transition-colors">
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="my-10 border-gray-300" />

                {/* Links and QR Codes Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Links Section */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {Object.keys(footerLinks).map((category, index) => (
                            <div key={index}>
                                <h4 className="text-gray-900 font-bold mb-4 uppercase text-sm">{category}</h4>
                                <ul className="space-y-2">
                                    {footerLinks[category].map((link, i) => (
                                        <li key={i}>
                                            <a href="#" className="text-sm hover:text-blue-600 transition-colors">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* QR Codes and Disclaimer Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center md:justify-items-end lg:justify-items-end">
                        <div className="text-center">
                            <img src={qrCode1} alt="App Store QR Code" className="w-32 h-32 mx-auto mb-2" />
                            <p className="text-sm font-semibold text-gray-800">Download App Now</p>
                        </div>
                        <div className="text-center">
                            <img src={qrCode2} alt="Google Play QR Code" className="w-32 h-32 mx-auto mb-2" />
                            <p className="text-sm font-semibold text-gray-800">Download App Now</p>
                        </div>
                    </div>
                </div>

                <hr className="my-10 border-gray-300" />

                {/* Final Disclaimer and Copyright */}
                <div className="lg:text-right text-center md:text-left mb-6">
                    <h4 className="text-gray-900 font-bold mb-2">Disclaimer and Disclosures</h4>
                    <p className="text-sm text-gray-500 mb-4">
                        For any queries contact: <a href="mailto:support@multyfi.com" className="text-blue-600 hover:underline">support@hi-soft.com</a>
                    </p>
                    <p className="text-xs text-gray-500">
                        All trades and investments are subject to market risk. Hi-Soft does not hold any responsibility for the money lost in losses nor does it take any partnership in the same. Hi-Soft does not commit to any intake of capital for trading or investment but serves to provide help based on its knowledge and experience on investor’s direction.
                    </p>
                </div>

                <div className="mt-10 text-center text-sm text-gray-500">
                    <p>© 2025 Sahibjeet Singh. Ltd. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;