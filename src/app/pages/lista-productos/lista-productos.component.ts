import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoDto } from 'src/app/models/producto.dto';
import { EnviarDatoService } from 'src/app/services/enviar-dato.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  public productos:ProductoDto[] = [];

  constructor(private productoService:ProductoService, private router:Router,private enviarDato:EnviarDatoService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(){
    this.productoService.obtenerProductos().subscribe(productos=>{
      this.productos = productos;
    })
  }

  editarProducto(producto:ProductoDto){
    this.enviarDato.setDato(producto);
    this.router.navigateByUrl('/detalle-producto');
  }
}
