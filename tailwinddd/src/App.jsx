// src/App.js

import React from 'react';
import Navbar from './components/Nav';
import HeroSection from './components/HeroSec';



function App() {
  return (
    <div className="bg-[#f7f8fc] min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection />
      </main>
      {/* Floating WhatsApp Button */}
      {/* <a
        href="https://wa.me/9878445782"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
      >
        <WhatsAppIcon />
      </a> */}
    </div>
  );
}

export default App;