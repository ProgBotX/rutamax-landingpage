import { Link } from "react-router-dom";

const Header = () => {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                <h3 className="text-lg font-semibold text-white">RutaMax</h3>
                <p className="mt-2 text-base text-gray-300">
                    La comunidad más grande de transporte público compartido.
                </p>
                </div>
                <div>
                <h3 className="text-lg font-semibold text-white">Enlaces</h3>
                <ul className="mt-4 space-y-2">
                    <li><a href="#" className="text-base text-gray-300 hover:text-white">Inicio</a></li>
                    <li><a href="#" className="text-base text-gray-300 hover:text-white">Características</a></li>
                    <li><a href="#" className="text-base text-gray-300 hover:text-white">Descargas</a></li>
                    <li><a href="#" className="text-base text-gray-300 hover:text-white">Contacto</a></li>
                </ul>
                </div>
                <div>
                <h3 className="text-lg font-semibold text-white">Legal</h3>
                <ul className="mt-4 space-y-2">
                    <li><a href="#" className="text-base text-gray-300 hover:text-white">Política de Privacidad</a></li>
                    <li><a href="#" className="text-base text-gray-300 hover:text-white">Términos de Uso</a></li>
                </ul>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8">
                <p className="text-base text-gray-400 text-center">
                &copy; 2025 RutaMax. Todos los derechos reservados.
                </p>
            </div>
            </div>
        </footer>
    );
  };
  
  export default Header;

