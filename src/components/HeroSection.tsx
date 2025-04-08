import React from "react";
import previewImage from "../assets/rutamax_preview.jpg";
import { FaDownload } from "react-icons/fa";
import "./HeroSection.css"; // Importamos el archivo CSS

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-sky-800 to-sky-950 py-20 md:pt-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-down">
            Bienvenido a RutaMax
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-xl animate-fade-in-down animation-delay-300">
            La mejor app para compartir rutas de transporte público actualizadas al momento. Viaja más inteligente y ayuda a tu comunidad.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-down animation-delay-600">
            <a 
              href="#downloads" 
              className="download-button flex items-center justify-center px-6 py-3 border-2 border-transparent text-base font-medium rounded-md text-emerald-500 bg-white hover:border-2 hover:border-emerald-500 md:py-4 md:text-lg md:px-8 transition duration-300 shadow-md"
            >
              <FaDownload className="mr-2" /> Descargar Ahora
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-float-up">
          <div className="phone-container w-96 h-[40rem] bg-white rounded-3xl shadow-xl border-4 border-white overflow-hidden transition-all duration-300">
            <div className="h-6 bg-gray-200 flex items-center justify-center rounded-t-lg">
              <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <div className="bg-blue-400 h-full flex items-center justify-center animate-subtle-pulse">
              <img
                src={previewImage}
                alt="Vista previa de la app"
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default HeroSection;