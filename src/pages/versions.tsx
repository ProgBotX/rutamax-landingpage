import { VersionData } from "../data/interfaces/VerionData";

// versionsData.js
const versionsData: VersionData[] = [
    {
      id: 1,
      version: "RutaMax v0.1.0-alpha",
      lastUpdate: "21 diciembre, 2024",
      status: "Obsoleto",
      statusColor: "yellow",
      changes: [
        "Compatible con dispositivos más antiguos",
        "Menor consumo de memoria",
        "Interfaz clásica"
      ],
      download: {
        platform: "Android",
        url: "https://www.dropbox.com/scl/fi/wvvogi5a75l4hwpfdznn5/20241221-ruta_max.apk?rlkey=9kcxuq6yda4p55xlr1n5roz73&st=pltr8dz6&dl=1",
        disabled: false
      }
    },  
    {
      id: 2,
      version: "RutaMax v0.1.2-alpha",
      lastUpdate: "7 enero, 2025",
      status: "Obsoleto",
      statusColor: "yellow", // Este valor lo usaremos para el color del badge.
      changes: [
        "Nuevas opciones para compartir rutas",
        "Mejoras en el rendimiento",
        "Corrección de errores menores"
      ],
      download: {
        platform: "Android",
        url: "https://www.dropbox.com/scl/fi/k19g08271b5468i5car1t/20250107-ruta_max.apk?rlkey=snkb2447glusug93u6m60g03h&st=onssedsj&dl=1",
        disabled: false
      }
    },
    {
      id: 3,
      version: "RutaMax v0.1.2-alpha",
      lastUpdate: "7 enero, 2025",
      status: "En desarrollo",
      statusColor: "yellow",
      changes: [
        "Nuevas opciones para compartir rutas",
        "Mejoras en el rendimiento",
        "Corrección de errores menores"
      ],
      download: {
        platform: "iOS",
        url: "#",
        disabled: true
      }
    },
    {
      id: 4,
      version: "RutaMax v0.1.5-alpha",
      lastUpdate: "17 abril, 2025",
      status: "Estable",
      statusColor: "green", // Este valor lo usaremos para el color del badge.
      changes: [
        "Opción para eliminar rutas",
        "Mejoras de seguridad y rendimiento",
        "Visualizar rutas del usuario sin conexión"
      ],
      download: {
        platform: "Android",
        url: "https://www.dropbox.com/scl/fi/bv4tzjwzpk7p2j8k7s9dw/20250417-ruta_max-v0.1.5-alpha.apk?rlkey=2j2wmtvbto79j3ye37nno8oo5&st=x1wz597h&dl=1",
        disabled: false
      }
    },
  ];
  
  export default versionsData;
  