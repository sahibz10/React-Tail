// src/App.js

import React from 'react';
import Navbar from './components/Nav';
import HeroSection from './components/HeroSec';
// import LoginCard from './components/Login';
import Clients from './components/Clients';
import WhatWeDo from './components/WhatweDo';
import LiveTrades from './components/LiveTrades';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-[#f7f8fc] min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection />
        
      </main>
      <Clients />
      <WhatWeDo />
      <LiveTrades />
      <Footer />
    </div>
  );
}

export default App;