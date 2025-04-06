import React, { useState } from 'react';
import Header from './components/Header';
import Features from './components/Features';
import GameGallery from './components/GameGallery';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Features />
      <GameGallery />
      <Footer />
    </div>
  );
};

export default App;


