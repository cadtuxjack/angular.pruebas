import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JuegosComponent } from './juegos/juegos.module';
import { ClientesComponent } from './clientes/clientes.module';


@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
