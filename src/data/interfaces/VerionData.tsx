// Define la interfaz para los datos de cada versión
export interface VersionData {
    id: number;
    version: string;
    lastUpdate: string;
    status: string;
    statusColor: 'green' | 'blue' | 'yellow'; // Puedes ampliar los posibles valores según tu lógica
    changes: string[];
    download: {
      platform: string;
      url: string;
      disabled: boolean;
    }
}

// Define la interfaz para las props del componente DownloadCard
export interface DownloadCardProps {
    data: VersionData;
}