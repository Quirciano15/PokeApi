import { Injectable } from '@angular/core';

@Injectable()
export class ClasePokemonService {
  nombre: String;
  imagen: String;
  tipo: Array<any>;
  peso: Number;
  altura: Number;
  stats: Array<any>;
  posicion: String;

  constructor(
    nombre: String,
    imagen: String,
    tipo: Array<any>,
    peso: Number,
    altura: Number,
    stats: Array<any>,
    posicion: String
  ) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.tipo = tipo;
    this.peso = peso;
    this.altura = altura;
    this.stats = stats;
    this.posicion = posicion;
  }
}
