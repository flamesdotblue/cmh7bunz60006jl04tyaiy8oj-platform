import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Hero />
      <Features />
      <Integrations />
      <Footer />
    </div>
  );
}

export default App;
