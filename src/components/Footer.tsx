import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-transit-950 border-t border-transit-700/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-transit-cyan/30 to-transparent" />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display text-2xl tracking-wide text-white">
                RIFTARA
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              La comunidad más grande de transporte público compartido. Viaja más inteligente, ayuda a tu comunidad.
            </p>
            <div className="flex gap-3 mt-6">
              <div className="w-8 h-8 rounded-lg bg-transit-800/50 border border-transit-700/30 flex items-center justify-center text-slate-400 hover:text-transit-cyan hover:border-transit-cyan/30 transition-all duration-200 cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </div>
              <div className="w-8 h-8 rounded-lg bg-transit-800/50 border border-transit-700/30 flex items-center justify-center text-slate-400 hover:text-transit-cyan hover:border-transit-cyan/30 transition-all duration-200 cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </div>
              <div className="w-8 h-8 rounded-lg bg-transit-800/50 border border-transit-700/30 flex items-center justify-center text-slate-400 hover:text-transit-cyan hover:border-transit-cyan/30 transition-all duration-200 cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-wide text-white mb-6">ENLACES</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-slate-400 hover:text-transit-cyan transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-transit-cyan/40" />
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="text-sm text-slate-400 hover:text-transit-cyan transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-transit-cyan/40" />
                  Descargas
                </Link>
              </li>
              <li>
                <a href="#features" className="text-sm text-slate-400 hover:text-transit-cyan transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-transit-cyan/40" />
                  Características
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-wide text-white mb-6">LEGAL</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-sm text-slate-400 hover:text-transit-cyan transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-transit-amber/40" />
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="/" className="text-sm text-slate-400 hover:text-transit-cyan transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-transit-amber/40" />
                  Términos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-transit-800/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Riftara. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-2 h-2 rounded-full bg-transit-cyan/40 animate-pulse" />
              <span>Red de rutas activa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
