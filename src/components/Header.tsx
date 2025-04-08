import { Link, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import Logo from "../assets/logo.png"

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const getNavLinkClass = (isActive: boolean) =>
      `text-white rounded-md px-3 py-2 font-medium ${
        isActive ? "bg-sky-600" : "hover:bg-sky-600 transition duration-150"
      }`;

    return (
      <nav className="bg-sky-950 md:bg-sky-950/60 md:backdrop-filter md:backdrop-blur-md shadow-lg md:fixed md:top-0 md:left-0 md:w-full md:z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-white font-bold text-xl space-x-3">
              <img 
                src={Logo}
                alt="Vista previa de la app" 
                className="h-14 object-cover"
              />
              <span>RutaMax</span>
              </Link>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>Inicio</NavLink>
              {/* <a href="#" className="text-white hover:text-blue-200 px-3 py-2 font-medium">Características</a> */}
              <NavLink to="downloads" className={({ isActive }) => getNavLinkClass(isActive)}>Descargas</NavLink>
              {/* <a href="#" className="text-white hover:text-blue-200 px-3 py-2 font-medium">Contacto</a> */}
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
          <div className="md:hidden bg-sky-900 pb-3 px-2">
            <Link to="/" className="block text-white hover:bg-sky-500 px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
            {/* <a href="#" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Características</a> */}
            <Link to="downloads" className="block text-white hover:bg-sky-500 px-3 py-2 rounded-md text-base font-medium">Descargas</Link>
            {/* <a href="#" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Contacto</a> */}
            {/* <a href="#" className="block bg-white text-blue-600 hover:bg-blue-50 mt-2 px-3 py-2 rounded-md text-base font-medium">Descargar App</a> */}
          </div>
        )}
      </nav>
    );
  };
  
  export default Header;
  