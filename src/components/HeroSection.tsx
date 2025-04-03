import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section className="bg-blue-500 text-white text-center py-20">
            <h1 className="text-4xl font-bold">Bienvenido a RutaMax</h1>
            <p className="text-lg mt-4">La mejor app para compartir rutas de transporte público</p>
            <a href="/downloads" className="mt-6 inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition">
                Descarga la App
            </a>
        </section>
    );
};
  
export default HeroSection;