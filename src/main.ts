import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';

@Component({
  selector: 'contenido',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    BarraBusquedaComponent,
    PokemonComponent,
  ],
  template: `
  <div class="cabecera">
    <div class="pokeTitulo">
      <h1 class="pokedex">PoKeDeX</h1>
    </div>
  </div>
    <app-pokemon></app-pokemon>
  `,
})
export class App {}

bootstrapApplication(App);
