import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
