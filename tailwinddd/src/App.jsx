// src/App.js

import React from 'react';
import Navbar from './components/Nav';
import HeroSection from './components/HeroSec';

// You can get this icon from a library like react-icons or use an SVG
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.898 6.166l-1.29 4.721 4.793-1.263z" />
  </svg>
);

function App() {
  return (
    <div className="bg-[#f7f8fc] min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection />
      </main>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9878445782"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

export default App;