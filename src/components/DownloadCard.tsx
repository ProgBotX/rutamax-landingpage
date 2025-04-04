import React from 'react';
import { DownloadCardProps } from '../data/interfaces/VerionData';
import { FaDownload } from "react-icons/fa";

const DownloadCard: React.FC<DownloadCardProps> = ({ data }) => {
  // Definimos clases dinámicas para el badge en base al color de estado.
  const statusBadgeColor = {
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    yellow: "bg-yellow-100 text-yellow-800"
  };

  // Clases para el botón basado en si está deshabilitado o no.
  const downloadButtonClasses = data.download.disabled
    ? "w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-400 cursor-not-allowed pointer-events-none"
    : "w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700";

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">{data.version}</h3>
        <p className="mt-2 text-sm text-gray-500">Última actualización: {data.lastUpdate}</p>
        <div className="mt-4 flex flex-col space-y-2">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusBadgeColor[data.statusColor]}`}>
            {data.status}
          </span>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <ul className="list-disc pl-5 space-y-1">
            {data.changes.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <a
            href={data.download.url}
            className={downloadButtonClasses}
          >
            <FaDownload className="mr-2" /> Descargar para {data.download.platform}
          </a>
        </div>
      </div>
    </div>
  );
}

export default DownloadCard;
