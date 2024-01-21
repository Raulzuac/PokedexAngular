import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokedex, Pokemon } from '../../interfaces/pokedex.interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  pokemons: Pokemon[] = [];

  constructor(private service:PokemonsService) {
    this.service.getPokemonList().subscribe(data =>{
      this.pokemons = data.results;
    })
  }


}
