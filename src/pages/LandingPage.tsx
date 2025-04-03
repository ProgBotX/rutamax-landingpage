import React from "react";
import HeroSection from "../components/HeroSection";

const LandingPage: React.FC = () => {
  return (
    <>
    
      <HeroSection />

      {/* Características */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">¿Por qué usar RutaMax?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg text-center">
            <h3 className="text-xl font-semibold">Colaborativo</h3>
            <p className="mt-2">Los usuarios pueden compartir rutas en tiempo real.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg text-center">
            <h3 className="text-xl font-semibold">Fácil de usar</h3>
            <p className="mt-2">Interfaz amigable para todos los usuarios.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg text-center">
            <h3 className="text-xl font-semibold">Actualizado</h3>
            <p className="mt-2">Información de rutas siempre al día.</p>
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-16">
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
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-150">
                  Descargar Ahora
                </a>
              </div>
              <div className="ml-3 inline-flex">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 transition duration-150">
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
