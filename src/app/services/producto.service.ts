import { Injectable } from '@angular/core';
import { ProductoDto } from '../models/producto.dto';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public productos:ProductoDto[] = 
  [
  {
    id:1,
    nombre:"Celular Samsung Galaxy A34 5g Negro",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_648110-MCO54617512628_032023-O.webp",
    precio:1899919,
    descripcion:"Galaxy A34 5G cuenta con una pantalla más brillante y más fluida para que disfrutes de tus juegos o de tus videos favoritos con la mejor experiencia. Te ofrece un modulo de cámara completo con 3 lentes (48MP +8MP+5MP) y la mejor tecnología que te invita a grabar todos los videos, con su estabilización mejorada. Este nuevo smartphone es resistente al agua y al polvo para que tengas la tranquilidad de tener un equipo resistente. Galaxy A34 5G es impresionante en cámara, rendimiento y multimedia."
  },
  {
    id:2,
    nombre:"Celular Samsung Galaxy S21 Fe 5g 128gb",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_660694-MCO69079951424_042023-F.webp",
    precio:1899919,
    descripcion:"Galaxy A34 5G cuenta con una pantalla más brillante y más fluida para que disfrutes de tus juegos o de tus videos favoritos con la mejor experiencia. Te ofrece un modulo de cámara completo con 3 lentes (48MP +8MP+5MP) y la mejor tecnología que te invita a grabar todos los videos, con su estabilización mejorada. Este nuevo smartphone es resistente al agua y al polvo para que tengas la tranquilidad de tener un equipo resistente. Galaxy A34 5G es impresionante en cámara, rendimiento y multimedia."
  },
  {
    id:3,
    nombre:"Celular Samsung Galaxy S22 5g 256gb Negro",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_607508-MCO69460143296_052023-F.webp",
    precio:1899919,
    descripcion:"Galaxy A34 5G cuenta con una pantalla más brillante y más fluida para que disfrutes de tus juegos o de tus videos favoritos con la mejor experiencia. Te ofrece un modulo de cámara completo con 3 lentes (48MP +8MP+5MP) y la mejor tecnología que te invita a grabar todos los videos, con su estabilización mejorada. Este nuevo smartphone es resistente al agua y al polvo para que tengas la tranquilidad de tener un equipo resistente. Galaxy A34 5G es impresionante en cámara, rendimiento y multimedia."
  },
  {
    id:4,
    nombre:"Celular Samsung Galaxy A34 5g Plata",
    imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_857043-MCO54617509954_032023-F.webp",
    precio:1899919,
    descripcion:"Galaxy A34 5G cuenta con una pantalla más brillante y más fluida para que disfrutes de tus juegos o de tus videos favoritos con la mejor experiencia. Te ofrece un modulo de cámara completo con 3 lentes (48MP +8MP+5MP) y la mejor tecnología que te invita a grabar todos los videos, con su estabilización mejorada. Este nuevo smartphone es resistente al agua y al polvo para que tengas la tranquilidad de tener un equipo resistente. Galaxy A34 5G es impresionante en cámara, rendimiento y multimedia."
  }
];
  constructor() { }


  obtenerProductos(){
    return of(this.productos);
  }
}
