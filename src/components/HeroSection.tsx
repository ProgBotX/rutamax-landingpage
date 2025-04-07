import React from "react";
import previewImage from "../assets/rutamax_preview.jpg"
import { FaDownload } from "react-icons/fa";

const HeroSection: React.FC = () => {
    return (
      <div className="bg-gradient-to-b from-sky-800 to-sky-950 py-24 md:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Bienvenido a RutaMax
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-xl">
            La mejor app para compartir rutas de transporte público actualizadas al momento. Viaja más inteligente y ayuda a tu comunidad.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#downloads" className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-500 bg-white hover:bg-emerald-50 md:py-4 md:text-lg md:px-8 transition duration-150 shadow-md">
            <FaDownload className="mr-2" /> Descargar Ahora
            </a>
            {/* <a href="#" className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-8 transition duration-150 shadow-md">
              Ver Características
            </a> */}
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-104 bg-white rounded-3xl shadow-xl border-4 border-white overflow-hidden">
            <div className="h-6 bg-gray-200 flex items-center justify-center rounded-t-lg">
              <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <div className="bg-blue-400 h-full flex items-center justify-center">
              <img 
                src={previewImage}
                alt="Vista previa de la app" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};
  
export default HeroSection;