import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex, Pokemon } from '../interfaces/pokedex.interface';
import { Poke } from '../interfaces/pokemon.interface';
import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  _selectedItem?:Item;

  _urlPokemonList = 'https://pokeapi.co/api/v2/pokemon?limit=1302';
  _urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  _urlItem = 'https://pokeapi.co/api/v2/item/';

  constructor(private http:HttpClient) {
    this.getItem("1").subscribe(data =>{
      this._selectedItem = data;
    })
  }
  get Item(){
    return this._selectedItem;
  }

  nextItem(){
    let id = this._selectedItem?.id;
    if(id){
      id++;
      this.getItem(id.toString()).subscribe(data =>{
        this._selectedItem = data;
      })
    }
    else{
      this.getItem("1").subscribe(data =>{
        this._selectedItem = data;
      })
    }
  }

  previousItem(){
    let id = this._selectedItem?.id;
    if(id == 1){
      return;
    }
    if(id){
      id--;
      this.getItem(id.toString()).subscribe(data =>{
        this._selectedItem = data;
      })
    }
    else{
      this.getItem("1").subscribe(data =>{
        this._selectedItem = data;
      })
    }
  }

  getItem(id:string):Observable<Item>{
    return this.http.get<Item>(this._urlItem + id);
  }

  getPokemonList():Observable<Pokedex>{
    return this.http.get<Pokedex>(this._urlPokemonList);
  }

  getPokemon(id:string):Observable<Poke>{
    return this.http.get<Poke>(this._urlPokemon + id);
  }
}
