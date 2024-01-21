import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Poke } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {



  pokemon?:Poke;

  constructor(private service:PokemonsService, private activeRoute:ActivatedRoute, private router:Router) {
    this.activeRoute.params.subscribe(({id}) =>{
      this.service.getPokemon(id).subscribe(data =>{
        this.pokemon = data;
      })
    })
   }



}
