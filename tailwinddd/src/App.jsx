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
        <H1>1</H1>
      </main>

    </div>
  );
}

export default App;