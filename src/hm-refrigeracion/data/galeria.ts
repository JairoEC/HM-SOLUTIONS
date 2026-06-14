import fotoRefrigeracion from '../../assets/imgs/foto-rabe-industry-970146.jpg'
import fotoEquipo from '../../assets/imgs/gray_rhee-air-vent-4714592.jpg'
import fotoEconomico from '../../assets/imgs/stux-vent-207148.jpg'
import fotoAire from '../../assets/imgs/stux-vent-234482.jpg'

export interface GaleriaItem {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
    alt: string;
}

export const galeria: GaleriaItem[] = [
    {
        id:1,
        titulo:'Refrigeracion 1',
        descripcion: 'Nuestras instalaciones de ultima generacion',
        imagen: fotoRefrigeracion,
        alt: 'Foto de la industria'
    },
    {
        id:2,
        titulo: 'Equipo moderno',
        descripcion: 'Nuevos equipos 2026',
        imagen: fotoEquipo,
        alt: 'EQUIPO NEW'
    },
    {
        id:3,
        titulo: 'EQUIPO ECONOMICO',
        descripcion: 'EQUIPO ECONOMICO Y OPTIMO',
        imagen: fotoEconomico,
        alt: 'EQUIPO ECONOMICO'
    },
    {
        id:4,
        titulo: 'EQUIPO AIRE ACONDICIONADO',
        descripcion: 'aire acondicionado listado',
        imagen: fotoAire,
        alt:'Aires acondicionado'
    }
]