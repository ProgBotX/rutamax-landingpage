import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">Mi Sitio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:underline">Inicio</Link></li>
              <li><Link to="/downloads" className="hover:underline">Descargas</Link></li>
              <li><Link to="#" className="hover:underline">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  