import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Bienvenido a Nuestra Plataforma</h1>
        <p className="text-lg mt-4">Descubre cómo podemos ayudarte a mejorar tu negocio.</p>
        <button className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-lg hover:bg-gray-200">
            Empieza Ahora
        </button>
        </section>
    );
};
  
export default HeroSection;