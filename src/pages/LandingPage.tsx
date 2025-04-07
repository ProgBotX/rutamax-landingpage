import React from "react";
import HeroSection from "../components/HeroSection";
import versionsData from "./versions";
import DownloadCard from "../components/DownloadCard";
import { FaDownload, FaUsers, FaRegSmile, FaSyncAlt } from 'react-icons/fa';

const LandingPage: React.FC = () => {
  return (
    <>
    
      <HeroSection />

      {/* Características */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">¿Por qué usar RutaMax?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg text-center shadow-lg">
            <div className="flex justify-center mb-4">
              <FaUsers className="text-blue-500 text-4xl" /> {/* Ícono */}
            </div>
            <h3 className="text-xl font-semibold">Colaborativo</h3>
            <p className="mt-2">Los usuarios pueden compartir rutas.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg text-center shadow-lg">
            <div className="flex justify-center mb-4">
              <FaRegSmile className="text-green-500 text-4xl" /> {/* Ícono */}
            </div>
            <h3 className="text-xl font-semibold">Fácil de usar</h3>
            <p className="mt-2">Interfaz amigable para todos los usuarios.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg text-center shadow-lg">
            <div className="flex justify-center mb-4">
              <FaSyncAlt className="text-yellow-500 text-4xl" /> {/* Ícono */}
            </div>
            <h3 className="text-xl font-semibold">Actualizado</h3>
            <p className="mt-2">Información de rutas siempre al día.</p>
          </div>
        </div>
      </section>

      <section id="downloads" className="py-16 bg-white container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Versiones Disponibles
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Descarga la versión que mejor se adapte a tu dispositivo
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {         
            /* versionsData.slice(0, 3).map((version) => (
              <DownloadCard key={version.id} data={version} />
            )) */

            versionsData
            .filter((version) => version.download.platform === "Android")
            .slice(-2) // Selecciona los últimos dos elementos
            .sort((a, b) => b.id - a.id)
            .map((version) => (
              <DownloadCard key={version.id} data={version} />
            ))
          }

          {
            versionsData.slice(2, 3).map((version) => (
              <DownloadCard key={version.id} data={version} />
            ))
          }
          </div>
      </section>

      {/* Llamada a la acción */}
      <section className="bg-gradient-to-r from-sky-900 to-sky-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Únete a nuestra comunidad
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Descarga la app y empieza a compartir tus rutas hoy mismo. Juntos podemos mejorar el transporte público.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a href="#downloads" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-sky-600 bg-white hover:bg-sky-50 transition duration-150">
                <FaDownload className="mr-2" /> Descargar Ahora
                </a>
              </div>
              <div className="ml-3 inline-flex">
                <a href="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-700 hover:bg-sky-600 transition duration-150">
                  Conocer Más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
