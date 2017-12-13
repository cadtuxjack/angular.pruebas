import { Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'clientes',
  template: `
  <h2>Componente de {{nombre}}</h2>
  `
})

export class ClientesComponent{
  public nombre = 'clientes 2018';
}
