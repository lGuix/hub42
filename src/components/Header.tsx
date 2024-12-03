import React from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="fixed w-full px-4 pt-4 z-50">
      <header className="max-w-7xl mx-auto bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-800">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Logo />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-customGray hover:text-white transition">Services</a>
              <a href="#portfolio" className="text-customGray hover:text-white transition">Portfolio</a>
              <a href="#contact" className="text-customGray hover:text-white transition">Contact</a>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-customGray" />
              ) : (
                <Menu className="h-6 w-6 text-customGray" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-800">
              <a href="#services" className="block px-3 py-2 text-customGray hover:text-white">Services</a>
              <a href="#portfolio" className="block px-3 py-2 text-customGray hover:text-white">Portfolio</a>
              <a href="#contact" className="block px-3 py-2 text-customGray hover:text-white">Contact</a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}