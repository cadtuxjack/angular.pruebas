import { Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'juegos',
  template: `
  <h2>Componente de {{nombre}}</h2>
  <h3 *ngIf="mostrar_retro != true">El mejor juego es: {{mejor_juego}}</h3>
  <h3 [style.background] = "color" *ngIf="mostrar_retro">El mejor juego retro es: {{mejor_juego_retro}}</h3>
  
  <h2>Listado de videojuegos</h2>
  <ul>
    <ol *ngFor="let game of videojuegos">
    {{game}}
    </ol>
  </ul>
  `

  // El color se pasa como propiedad, pero podría ser un string "'yellow'"
})

export class JuegosComponent{
  public nombre = 'videojuegos 2018';
  public mejor_juego = 'NBA CrACKs';
  public mejor_juego_retro = 'Super Mario 64';
  public mostrar_retro = true;
  public color = "yellow";

  public videojuegos = [
    'Taken',
    'Diablo',
    'Sun',
    'NBA',
    'Batman'
  ];
}
