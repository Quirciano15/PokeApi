import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObtenerPokemonsService } from '../servicioPokemon/obtenerPokemons.service';
import { BarraBusquedaComponent } from '../barra-busqueda/barra-busqueda.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  standalone: true,
  imports: [CommonModule, PokemonComponent, BarraBusquedaComponent],
  providers: [ObtenerPokemonsService],
})
export class PokemonComponent implements OnInit {
  arrayPokemons: Array<any>;
  arrayPokemonsFiltrado: Array<any>;

  constructor(private servicioPokemon: ObtenerPokemonsService) {
    this.arrayPokemons = [];
    this.arrayPokemonsFiltrado = [];
  }

  ngOnInit() {
    this.getPokemonsComponente();
    /* hacemos que el array filtrado sea igual al de con todos los
    pokemons para cuando no se utilice la busqueda aparezcan todos */
    this.arrayPokemonsFiltrado = this.arrayPokemons;
  }

  getPokemonsComponente() {
    let datosPokemons;
    //151 porque son los del primer juego
    for (let i = 1; i <= 151; i++) {
      this.servicioPokemon.getPokemons(i).subscribe((datos) => {
        //escribo los datos necesarios del pokemon en este objeto
        datosPokemons = {
          nombre: datos.name,
          imagen: datos.sprites.front_default,
          tipo: datos.types,
          peso: datos.weight,
          altura: datos.height,
          stats: datos.stats,
          posicion: i,
        };

        //añado el objeto al array de pokemons
        this.arrayPokemons.push(datosPokemons);
      });
    }
  }

  //se ejecuta cada vez que recibe el evento emit
  onChange(textBusaqueda: string) {
    //si la busqueda esta vacia muestra todos los pokemon
    if (textBusaqueda.trim() === '') {
      this.arrayPokemonsFiltrado = this.arrayPokemons;
    } else {
    /* si hay algo escrito en el input solo carga en el array los
    datos de los pokemon que contengan esa cadena en su nombre */
      this.arrayPokemonsFiltrado = this.arrayPokemons.filter((pokemon) =>
        pokemon.nombre.toLowerCase().includes(textBusaqueda.toLowerCase())
      );
    }
  }
}
