import React from "react";
import previewImage from "../assets/rutamax_preview.jpg";
import { FaDownload } from "react-icons/fa";
import "./HeroSection.css";

const RouteLineSVG = () => (
  <svg
    className="w-full max-w-4xl mx-auto h-24 md:h-32"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
        <stop offset="20%" stopColor="#22d3ee" stopOpacity="1" />
        <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
        <stop offset="80%" stopColor="#d946ef" stopOpacity="1" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
      </linearGradient>
    </defs>

    <path
      d="M-50,60 C150,10 350,110 550,60 C750,10 950,110 1150,60 C1200,45 1250,60 1250,60"
      stroke="url(#routeGrad)"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      style={{
        strokeDasharray: 2000,
        strokeDashoffset: 2000,
        animation: 'routeDraw 2.5s ease forwards',
        animationDelay: '1s',
      }}
    />

    <circle cx="200" cy="38" r="5" fill="#22d3ee" style={{ animation: 'nodePulse 2s ease-in-out infinite', animationDelay: '1.5s' }} />
    <circle cx="200" cy="38" r="12" fill="none" stroke="#22d3ee" strokeWidth="0.5" opacity="0.3" style={{ animation: 'nodePulse 2s ease-in-out infinite', animationDelay: '1.5s' }} />

    <circle cx="550" cy="60" r="5" fill="#f59e0b" style={{ animation: 'nodePulse 2s ease-in-out infinite', animationDelay: '2s' }} />
    <circle cx="550" cy="60" r="12" fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.3" style={{ animation: 'nodePulse 2s ease-in-out infinite', animationDelay: '2s' }} />

    <circle cx="900" cy="82" r="5" fill="#d946ef" style={{ animation: 'nodePulse 2s ease-in-out infinite', animationDelay: '2.5s' }} />
    <circle cx="900" cy="82" r="12" fill="none" stroke="#d946ef" strokeWidth="0.5" opacity="0.3" style={{ animation: 'nodePulse 2s ease-in-out infinite', animationDelay: '2.5s' }} />
  </svg>
);

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-transit-950 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transit-cyan/5 via-transparent to-transit-950/80" />

      <div className="absolute top-40 left-10 w-72 h-72 bg-transit-cyan/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-transit-magenta/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-transit-cyan/10 border border-transit-cyan/20 text-transit-cyan text-xs font-body font-medium tracking-wide mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-transit-cyan animate-pulse" />
              Red de transporte colaborativa
            </div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-none text-white mb-6 animate-fade-in-up animation-delay-200">
              <span className="gradient-text">RIFTARA</span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl text-slate-300 font-body font-light">
                Tu red de rutas
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed mb-10 animate-fade-in-up animation-delay-400">
              La comunidad más grande de transporte público compartido. 
              Descubre rutas actualizadas, comparte tus trayectos y viaja 
              más inteligente mientras ayudas a tu comunidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-600">
              <a href="#downloads" className="btn-primary group">
                <FaDownload className="mr-2 transition-transform duration-300 group-hover:-translate-y-0.5" />
                DESCARGAR AHORA
              </a>
              <a href="#features" className="btn-secondary group">
                <span className="mr-2">CONOCER MÁS</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center animate-float-up animation-delay-400">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-b from-transit-cyan/20 via-transit-amber/10 to-transparent rounded-[32px] blur-xl animate-phone-glow" />
              <div className="relative w-64 md:w-72 bg-transit-900 rounded-[28px] border-2 border-transit-700/50 overflow-hidden shadow-2xl">
                <div className="h-7 bg-transit-800 flex items-center justify-center gap-2">
                  <div className="w-20 h-1.5 bg-transit-700 rounded-full" />
                </div>
                <div className="aspect-[9/19] bg-transit-800 overflow-hidden">
                  <img
                    src={previewImage}
                    alt="Vista previa de Riftara"
                    className="w-full h-full object-cover animate-fade-in-scale animation-delay-800"
                  />
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-transit-700/50 bg-transit-900" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pb-8 animate-fade-in-up animation-delay-1000">
        <RouteLineSVG />
      </div>
    </section>
  );
};

export default HeroSection;
