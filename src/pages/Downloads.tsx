const Downloads = () => {
    return (
      <div id="downloads" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Versiones Disponibles
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Descarga la versión que mejor se adapte a tu dispositivo
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Version 1 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">RutaMax v2.1.0</h3>
                <p className="mt-2 text-sm text-gray-500">Última actualización: 15 marzo, 2025</p>
                <div className="mt-4 flex flex-col space-y-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Estable
                  </span>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Nuevas opciones para compartir rutas</li>
                    <li>Mejoras en el rendimiento</li>
                    <li>Corrección de errores menores</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                    Descargar para Android
                  </a>
                </div>
              </div>
            </div>

            {/* Version 2 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">RutaMax v2.1.0</h3>
                <p className="mt-2 text-sm text-gray-500">Última actualización: 15 marzo, 2025</p>
                <div className="mt-4 flex flex-col space-y-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Estable
                  </span>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Nuevas opciones para compartir rutas</li>
                    <li>Mejoras en el rendimiento</li>
                    <li>Corrección de errores menores</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                    Descargar para iOS
                  </a>
                </div>
              </div>
            </div>

            {/* Version 3 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">RutaMax v2.0.5</h3>
                <p className="mt-2 text-sm text-gray-500">Última actualización: 1 febrero, 2025</p>
                <div className="mt-4 flex flex-col space-y-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Versión anterior
                  </span>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Compatible con dispositivos más antiguos</li>
                    <li>Menor consumo de memoria</li>
                    <li>Interfaz clásica</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                    Descargar versión ligera
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Downloads;
  