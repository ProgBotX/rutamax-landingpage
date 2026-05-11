import React from "react";
import versionsData from "./versions";
import DownloadCard from "../components/DownloadCard";
import { FaDownload, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Downloads = () => {
  return (
    <div className="relative min-h-screen bg-transit-950 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-40 -left-20 w-80 h-80 bg-transit-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-transit-magenta/5 rounded-full blur-[120px]" />

      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-transit-cyan transition-colors duration-200 mb-12 group"
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Volver al inicio
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-transit-cyan/10 border border-transit-cyan/20 text-transit-cyan text-xs font-body font-medium tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-transit-cyan animate-pulse" />
              Descargas
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white mb-4">
              VERSIONES <span className="gradient-text">DISPONIBLES</span>
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              Descarga la versión que mejor se adapte a tu dispositivo.
            </p>
          </div>
        </div>

        <div className="bg-transit-800/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {versionsData
                .filter((version) => version.download.platform === "Android")
                .sort((a, b) => b.id - a.id)
                .map((version) => (
                  <DownloadCard key={version.id} data={version} />
                ))}
              {versionsData.slice(2, 3).map((version) => (
                <DownloadCard key={version.id} data={version} />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
          <p className="text-sm text-slate-500 mb-4">¿No encuentras lo que buscas?</p>
          <a href="#contacto" className="btn-secondary inline-flex">
            <FaDownload className="mr-2" />
            SOLICITAR AYUDA
          </a>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
