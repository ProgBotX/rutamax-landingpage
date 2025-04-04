import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <nav className="bg-gradient-to-r from-sky-900 to-sky-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* <span className="text-white font-bold text-xl">RutaMax</span> */}
              <Link to="/" className="text-white font-bold text-xl">RutaMax</Link>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-blue-200 px-3 py-2 font-medium">Inicio</Link>
              {/* <a href="#" className="text-white hover:text-blue-200 px-3 py-2 font-medium">Características</a> */}
              <Link to="downloads" className="text-white hover:text-blue-200 px-3 py-2 font-medium">Descargas</Link>
              {/* <a href="#" className="text-white hover:text-blue-200 px-3 py-2 font-medium">Contacto</a> */}
              {/* <a href="#" className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition duration-150">Descargar App</a> */}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blue-200 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-900 pb-3 px-2">
            <Link to="/" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
            {/* <a href="#" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Características</a> */}
            <Link to="downloads" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Descargas</Link>
            {/* <a href="#" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Contacto</a> */}
            {/* <a href="#" className="block bg-white text-blue-600 hover:bg-blue-50 mt-2 px-3 py-2 rounded-md text-base font-medium">Descargar App</a> */}
          </div>
        )}
      </nav>
    );
  };
  
  export default Header;
  