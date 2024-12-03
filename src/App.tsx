import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WebPricing } from './components/WebPricing';
import { GraphicServices } from './components/GraphicServices';
import { Contact } from './components/Contact';
import { Background } from './components/Background';

function App() {
  return (
    <div className="relative bg-gray-900 text-white overflow-y-hidden">

      <Background />
      <Header />
      <main className="relative">
        <Hero />
        <Services />
        <Portfolio />
        <WebPricing />
        <GraphicServices />
        <Contact />
      </main>
      <footer className="relative bg-gray-900/50 backdrop-blur-md text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Hub42. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;