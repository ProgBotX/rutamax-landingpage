import { Link, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import Logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-4 py-2 text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
      isActive
        ? "text-transit-cyan"
        : "text-slate-300 hover:text-transit-cyan"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 rounded-lg text-sm font-body font-medium transition-all duration-200 ${
      isActive
        ? "text-transit-cyan bg-transit-cyan/10"
        : "text-slate-300 hover:text-transit-cyan hover:bg-transit-800/50"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transit-900/70 backdrop-blur-xl border-b border-transit-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={Logo}
                alt="Riftara"
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-transit-cyan/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-display text-2xl tracking-wide text-white group-hover:text-transit-cyan transition-colors duration-300">
              RIFTARA
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={linkClass}>INICIO</NavLink>
            <NavLink to="downloads" className={linkClass}>DESCARGAS</NavLink>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-slate-300 hover:text-transit-cyan transition-colors"
            aria-label="Menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 space-y-1 bg-transit-900/90 backdrop-blur-xl border-t border-transit-800/30">
          <NavLink to="/" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>INICIO</NavLink>
          <NavLink to="downloads" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>DESCARGAS</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
