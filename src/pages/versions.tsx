import { VersionData } from "../data/interfaces/VerionData";

// versionsData.js
const versionsData: VersionData[] = [
    {
      id: 1,
      version: "Riftara v0.1.0-alpha",
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
        disabled: true
      }
    },  
    {
      id: 2,
      version: "Riftara v0.1.2-alpha",
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
        disabled: true
      }
    },
    {
      id: 3,
      version: "Riftara v0.1.2-alpha",
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
      version: "Riftara v0.1.6-alpha",
      lastUpdate: "18 abril, 2025",
      status: "Obsoleto",
      statusColor: "yellow", // Este valor lo usaremos para el color del badge.
      changes: [
        "Opción para eliminar rutas",
        "Mejoras de seguridad y rendimiento",
        "Visualizar rutas del usuario sin conexión"
      ],
      download: {
        platform: "Android",
        url: "https://www.dropbox.com/scl/fi/q899h5dw074v4jzl94o1t/20250418-ruta_max_v0.1.6-alpha.apk?rlkey=g0iicalp2icu81q485tfddh3n&st=fe4cub63&dl=1",
        disabled: true
      }
    },
    {
      id: 5,
      version: "Riftara v0.2.0-alpha",
      lastUpdate: "07 noviembre, 2025",
      status: "Obsoleto",
      statusColor: "yellow", // Este valor lo usaremos para el color del badge.
      changes: [
        "Descarga de mapas para uso sin conexión",
        "Redimiento optimizado de la aplicación",
        "Creación de rutas sin conexión"
      ],
      download: {
        platform: "Android",
        url: "https://www.dropbox.com/scl/fi/6cyuog6rplkhtxje4umg6/20251107-rutamax-v0.2.0-alpha.apk?rlkey=abmh9on5yu7tt9uzpquwj2l03&st=63phy000&dl=1",
        disabled: true
      }
    },
    {
      id: 6,
      version: "Riftara v0.3.1-alpha",
      lastUpdate: "20 marzo, 2026",
      status: "Obsoleto",
      statusColor: "yellow", // Este valor lo usaremos para el color del badge.
      changes: [
        "Actualización completa del diseño UX/UI",
        "Redimiento optimizado de la aplicación"
      ],
      download: {
        platform: "Android",
        url: "https://www.dropbox.com/scl/fi/93tej01ywbvon3ub2zeln/20260320-ruta_max-v0.3.1-alpha.apk?rlkey=4juasqynjjdnsblyhgesxkr50&st=bx4cvyjm&dl=1",
        disabled: false
      }
    },
    {
      id: 7,
      version: "Riftara v0.3.2-alpha",
      lastUpdate: "03 abril, 2026",
      status: "Estable",
      statusColor: "green", // Este valor lo usaremos para el color del badge.
      changes: [
        "Actualización del diseño UX/UI",
        "Redimiento optimizado de la aplicación",
        "Actualización del motor cartográfico",
        "Integra sección de contacto, preajustes sugeridos y gestión de errores"
      ],
      download: {
        platform: "Android",
        url: "https://www.dropbox.com/scl/fi/fdpa6163rdgtuzatc6qqp/20260403-riftara-v0.3.2-alpha.apk?rlkey=qb638p9dpeif67r3llakuvjxy&st=vb2s10dg&dl=1",
        disabled: false
      }
    },
  ];
  
  export default versionsData;
  