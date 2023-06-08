import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';

const routes: Routes = [
  {
    path:'productos',
    component:ListaProductosComponent
  },
  {
    path:'detalle-producto',
    component:EditarProductoComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/productos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
