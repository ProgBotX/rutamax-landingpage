import { VersionData } from "../data/interfaces/VerionData";

// versionsData.js
const versionsData: VersionData[] = [
    {
      id: 1,
      version: "RutaMax v0.1.0",
      lastUpdate: "21 diciembre, 2024",
      status: "Versión anterior",
      statusColor: "blue",
      changes: [
        "Compatible con dispositivos más antiguos",
        "Menor consumo de memoria",
        "Interfaz clásica"
      ],
      download: {
        platform: "Android",
        url: "https://github.com/ProgBotX/rutamax-landingpage/releases/download/v0.1.0-alpha/20241221---ruta_max.apk",
        disabled: false
      }
    },  
    {
      id: 2,
      version: "RutaMax v0.1.2",
      lastUpdate: "7 enero, 2025",
      status: "Estable",
      statusColor: "green", // Este valor lo usaremos para el color del badge.
      changes: [
        "Nuevas opciones para compartir rutas",
        "Mejoras en el rendimiento",
        "Corrección de errores menores"
      ],
      download: {
        platform: "Android",
        url: "https://github.com/ProgBotX/rutamax-landingpage/releases/download/v0.1.2-alpha/20250107---ruta_max.apk",
        disabled: false
      }
    },
    {
      id: 3,
      version: "RutaMax v0.1.2",
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
    /* {
      id: 4,
      version: "RutaMax v2.0.5",
      lastUpdate: "1 febrero, 2025",
      status: "Versión anterior",
      statusColor: "blue",
      changes: [
        "Compatible con dispositivos más antiguos",
        "Menor consumo de memoria",
        "Interfaz clásica"
      ],
      download: {
        platform: "Android",
        url: "#",
        disabled: false
      }
    } */
  ];
  
  export default versionsData;
  