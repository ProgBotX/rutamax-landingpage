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
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Únete a nuestra comunidad</h2>
        <p className="mt-4">Descarga la app y empieza a compartir tus rutas hoy mismo.</p>
        <a href="/downloads" className="mt-6 inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition">
          Descargar ahora
        </a>
      </section>
    </>
  );
};

export default LandingPage;
