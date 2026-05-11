import React from "react";
import HeroSection from "../components/HeroSection";
import versionsData from "./versions";
import DownloadCard from "../components/DownloadCard";
import { FaCloudDownloadAlt, FaRoute, FaShieldAlt, FaStar, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';

const accentMap = {
  cyan: {
    container: 'bg-transit-cyan/10 border-transit-cyan/20 text-transit-cyan',
    bar: 'from-transit-cyan/40',
    hover: 'hover:border-transit-cyan/30',
    bg: 'from-transit-cyan/[0.03]',
  },
  amber: {
    container: 'bg-transit-amber/10 border-transit-amber/20 text-transit-amber',
    bar: 'from-transit-amber/40',
    hover: 'hover:border-transit-amber/30',
    bg: 'from-transit-amber/[0.03]',
  },
  magenta: {
    container: 'bg-transit-magenta/10 border-transit-magenta/20 text-transit-magenta',
    bar: 'from-transit-magenta/40',
    hover: 'hover:border-transit-magenta/30',
    bg: 'from-transit-magenta/[0.03]',
  },
};

const FeatureCard = ({ icon, title, desc, accent, delay }: { icon: React.ReactNode; title: string; desc: string; accent: keyof typeof accentMap; delay: string }) => {
  const a = accentMap[accent];
  return (
    <div className={`group relative glass-card p-8 ${a.hover} transition-all duration-500 animate-fade-in-up ${delay}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${a.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />

      <div className={`w-14 h-14 rounded-xl ${a.container} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>

      <h3 className="font-display text-2xl tracking-wide text-white mb-3 group-hover:text-transit-cyan transition-colors duration-300">
        {title}
      </h3>

      <p className="text-sm text-slate-400 leading-relaxed">
        {desc}
      </p>

      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${a.bar} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </div>
  );
};

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />

      <section id="features" className="relative py-24 bg-transit-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-transit-cyan/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-transit-amber/10 border border-transit-amber/20 text-transit-amber text-xs font-body font-medium tracking-wide mb-6 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-transit-amber" />
              Características
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4 animate-fade-in-up animation-delay-200">
              ¿POR QUÉ <span className="gradient-text">RIFTARA</span>?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base animate-fade-in-up animation-delay-400">
              Una plataforma construida por y para la comunidad de transporte público.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={<FaCloudDownloadAlt />}
              title="SIN CONEXIÓN"
              desc="Descarga mapas y utiliza la app sin necesidad de internet. Perfecto para cuando estás en movimiento o en zonas con poca cobertura."
              accent="cyan"
              delay="animation-delay-200"
            />
            <FeatureCard
              icon={<FaRoute />}
              title="RUTAS INTELIGENTES"
              desc="Busca rutas directamente o selecciona un destino y la app encuentra automáticamente el mejor camino para llegar."
              accent="amber"
              delay="animation-delay-400"
            />
            <FeatureCard
              icon={<FaShieldAlt />}
              title="COMPARTIR SEGURO"
              desc="Comparte tus rutas en tiempo real con otros usuarios. Viaja con tranquilidad sabiendo que alguien sigue tu trayecto."
              accent="magenta"
              delay="animation-delay-600"
            />
          </div>
        </div>
      </section>

      <section id="downloads" className="relative py-24 bg-transit-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-transit-amber/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-transit-cyan/10 border border-transit-cyan/20 text-transit-cyan text-xs font-body font-medium tracking-wide mb-6 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-transit-cyan animate-pulse" />
              Versiones
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4 animate-fade-in-up animation-delay-200">
              VERSIONES <span className="gradient-text">DISPONIBLES</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base animate-fade-in-up animation-delay-400">
              Descarga la versión que mejor se adapte a tu dispositivo.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {versionsData
              .filter((version) => version.download.platform === "Android")
              .slice(-2)
              .sort((a, b) => b.id - a.id)
              .map((version) => (
                <DownloadCard key={version.id} data={version} />
              ))}
            {versionsData.slice(2, 3).map((version) => (
              <DownloadCard key={version.id} data={version} />
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <a
              href="/downloads"
              className="btn-secondary group inline-flex"
            >
              <span>VER TODAS LAS VERSIONES</span>
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-transit-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-transit-cyan/8 via-transparent to-transit-amber/8" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-transit-cyan/10 border border-transit-cyan/20 text-transit-cyan text-xs font-body font-medium tracking-wide mb-6 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-transit-cyan animate-pulse" />
              Comunidad
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4 animate-fade-in-up animation-delay-200">
              LA RED <span className="gradient-text">CRECE CONTIGO</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed animate-fade-in-up animation-delay-400">
              Cada ruta que compartes fortalece la red. Entre más contribuyamos, 
              mejores serán las rutas para todos. Tú aportas, todos ganan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
            <div className="glass-card p-6 text-center animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 rounded-full bg-transit-cyan/10 border border-transit-cyan/20 flex items-center justify-center text-transit-cyan text-xl mx-auto mb-4">
                <FaCloudDownloadAlt />
              </div>
              <h3 className="font-display text-lg tracking-wide text-white mb-2">COMPARTE RUTAS</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Aporta las rutas que conoces y ayuda a otros a llegar a su destino. Cada contribución cuenta.
              </p>
            </div>

            <div className="glass-card p-6 text-center animate-fade-in-up animation-delay-400">
              <div className="w-12 h-12 rounded-full bg-transit-amber/10 border border-transit-amber/20 flex items-center justify-center text-transit-amber text-xl mx-auto mb-4">
                <FaStar />
              </div>
              <h3 className="font-display text-lg tracking-wide text-white mb-2">ACUMULA PUNTOS</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Gana puntos por cada ruta que aportes. Próximamente podrás canjearlos por funcionalidades premium.
              </p>
            </div>

            <div className="glass-card p-6 text-center animate-fade-in-up animation-delay-600">
              <div className="w-12 h-12 rounded-full bg-transit-magenta/10 border border-transit-magenta/20 flex items-center justify-center text-transit-magenta text-xl mx-auto mb-4">
                <FaArrowRight />
              </div>
              <h3 className="font-display text-lg tracking-wide text-white mb-2">TODOS GANAN</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Entre más rutas compartamos, más precisas y actualizadas serán. La red mejora para todos.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto glass-card p-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-transit-amber/10 border border-transit-amber/20 flex items-center justify-center text-transit-amber text-2xl">
                  <FaMapMarkerAlt />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl tracking-wide text-transit-amber mb-2">PRÓXIMAMENTE</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Estamos trabajando en una visualización detallada de <strong className="text-slate-300">paradas</strong> para que puedas ver cada punto de las rutas con mayor precisión. También se vienen <strong className="text-slate-300">funcionalidades premium</strong> que podrás desbloquear con los puntos que acumules contribuyendo a la comunidad.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-in-up">
            <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
              Cuantos más seamos, mejor funcionará la red. 
              Cada ruta nueva es un paso hacia un transporte público 
              más conectado para todos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
