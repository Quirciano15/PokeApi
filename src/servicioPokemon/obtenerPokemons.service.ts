import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ObtenerPokemonsService {
  url: String;

  constructor(private http: HttpClient) {
    //esta url nos devuelve solo los primeros 20 pokemon pero si despues le añadimos un numero nos devuelve los datos de ese pokemon
    this.url = 'https://pokeapi.co/api/v2/pokemon';
  }

  getPokemons(index: any) {
    return this.http.get<any>(`${this.url}/${index}`);
  }
}
