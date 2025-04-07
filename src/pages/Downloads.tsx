import React from "react";
import versionsData from "./versions";
import DownloadCard from "../components/DownloadCard";

const Downloads = () => {
    return (
      <div id="downloads">
        <div className="md:bg-sky-800 md:pt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Versiones Disponibles
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Descarga la versión que mejor se adapte a tu dispositivo
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {
          /* versionsData
          .filter((version) => version.status == "Estable")
          .map((version) => (
            <DownloadCard key={version.id} data={version} />
          )) */

          versionsData
          .filter((version) => version.download.platform === "Android")
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
        </div>
      </div>
    );
  };
  
export default Downloads;
  