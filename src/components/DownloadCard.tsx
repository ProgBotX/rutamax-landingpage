import React from 'react';
import { DownloadCardProps } from '../data/interfaces/VerionData';
import { FaAndroid, FaApple } from "react-icons/fa";

const statusConfig = {
  green: {
    label: 'bg-transit-cyan/10 text-transit-cyan border-transit-cyan/20',
    dot: 'bg-transit-cyan',
    line: 'border-transit-cyan/20',
  },
  blue: {
    label: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    dot: 'bg-blue-400',
    line: 'border-blue-500/20',
  },
  yellow: {
    label: 'bg-transit-amber/10 text-transit-amber border-transit-amber/20',
    dot: 'bg-transit-amber',
    line: 'border-transit-amber/20',
  },
};

const DownloadCard: React.FC<DownloadCardProps & { darker?: boolean }> = ({ data, darker }) => {
  const colors = statusConfig[data.statusColor] || statusConfig.yellow;
  const isDisabled = data.download.disabled;
  const isIOS = data.download.platform === "iOS";

  return (
    <div className={`group relative backdrop-blur-sm border border-transit-700/40 rounded-xl hover:border-transit-cyan/30 transition-all duration-500 overflow-hidden ${darker ? 'bg-transit-900/75' : 'bg-transit-800/60'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-transit-cyan/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transit-cyan/40 via-transit-amber/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-display text-xl tracking-wide text-white group-hover:text-transit-cyan transition-colors duration-300">
              {data.version}
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-body">
              {data.lastUpdate}
            </p>
          </div>
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${colors.label}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
            {data.status}
          </div>
        </div>

        <div className="mb-5">
          <ul className="space-y-2">
            {data.changes.map((item: string, index: number) => (
              <li key={index} className="text-sm text-slate-300 flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-transit-cyan/40 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {isDisabled ? (
          <span
            className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-xl text-sm font-body font-semibold tracking-wide bg-transit-800/50 text-slate-400 border border-transit-700/20"
          >
            {isIOS ? <FaApple className="text-lg" /> : <FaAndroid className="text-lg" />}
            <span>PRÓXIMAMENTE</span>
          </span>
        ) : (
          <a
            href={data.download.url}
            className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-xl text-sm font-body font-semibold tracking-wide transition-all duration-300 bg-transit-cyan text-transit-950 hover:bg-cyan-300 shadow-lg shadow-transit-cyan/20 hover:shadow-transit-cyan/30 hover:-translate-y-0.5"
          >
            {isIOS ? <FaApple className="text-lg" /> : <FaAndroid className="text-lg" />}
            <span>DESCARGAR APK</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default DownloadCard;
