import { Component, OnInit } from '@angular/core';
import { ProductoDto } from 'src/app/models/producto.dto';
import { EnviarDatoService } from 'src/app/services/enviar-dato.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  constructor(private enviarDato:EnviarDatoService) { }
  public producto:ProductoDto = { nombre:'',precio:0,imagen:'',id:0,descripcion:''};
  ngOnInit(): void {
    this.obtenerProduct();
  }

  obtenerProduct(){
   let producto =  this.enviarDato.getDato() || "No se encontro el objecto producto";
   this.producto = JSON.parse(producto);
  }

}
