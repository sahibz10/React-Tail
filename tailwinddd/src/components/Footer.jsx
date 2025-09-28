import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Placeholder QR code images. You'll need to add your own.
import qrCode1 from '../assets/appstoreqr.png';
import qrCode2 from '../assets/playstoreqr.png';

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
    <footer className="bg-gray-100 py-16 text-gray-700">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* Multyfi Logo (as a placeholder SVG or image) */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-10 w-10 text-blue-600">
                <path d="M50 0L0 50l50 50L100 50zM50 10L10 50l40 40L90 50z" fill="currentColor" />
              </svg>
              <span className="font-bold text-xl text-gray-800">Multyfi</span>
            </div>
            <p className="text-sm max-w-lg mb-4">
              Multyfi is a SEBI registered stock advisor, which tells its customers what stock to buy and when to buy.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialIcons.map((item, index) => (
                <a key={index} href={item.link} className="text-gray-500 hover:text-blue-600 transition-colors">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-1 lg:col-span-2">
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
        </div>

        <hr className="my-10 border-gray-300" />

        {/* QR Code and Disclaimer Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* QR Codes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center md:justify-items-start">
            <div className="text-center">
              <img src={qrCode1} alt="App Store QR Code" className="w-32 h-32 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-800">Download App Now</p>
            </div>
            <div className="text-center">
              <img src={qrCode2} alt="Google Play QR Code" className="w-32 h-32 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-800">Download App Now</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="lg:text-right text-center md:text-left">
            <h4 className="text-gray-900 font-bold mb-2">Disclaimer and Disclosures</h4>
            <p className="text-sm text-gray-500 mb-4">
              For any queries contact: <a href="mailto:support@multyfi.com" className="text-blue-600 hover:underline">support@multyfi.com</a>
            </p>
            <p className="text-xs text-gray-500">
              All trades and investments are subject to market risk. Multyfi does not hold any responsibility for the money lost in losses nor does it take any partnership in the same. Multyfi does not commit to any intake of capital for trading or investment but serves to provide help based on its knowledge and experience on investor’s direction.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          <p>© 2025 Botalpha Technologies Pvt. Ltd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;