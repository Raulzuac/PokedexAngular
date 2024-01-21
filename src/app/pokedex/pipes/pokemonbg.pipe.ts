import { Pipe, PipeTransform } from '@angular/core';
import { Poke } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'pokemonbg'
})
export class PokemonbgPipe implements PipeTransform {

  transform(pokemon: Poke): string {
    const type = pokemon.types[0].type.name;

    const typesBG:Record<string,string> = {
      "normal": '#a8a399',
      "fighting": '#c8a094',
      "flying": '#b1bef6',
      "poison": '#dbb8da',
      "ground": '#f8eec9',
      "rock": '#c4af73',
      "bug": '#dce597',
      "ghost": '#7b7cbd',
      "steel": '#c4c2db',
      "fire": '#fbaa7b',
      "water": '#8bc8f4',
      "grass": '#b4e876',
      "electric": '#ffedb1',
      "psychic": '#ffa8b1',
      "ice": '#bce2e8',
      "dragon": '#a8a3e0',
      "dark": '#a0928d',
      "fairy": '#f9bfe5',
    }
    return `background-color: ${typesBG[type]}`;
  }


}
