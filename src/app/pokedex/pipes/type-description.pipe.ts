import { Pipe, PipeTransform } from '@angular/core';
import { Poke } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'typeDescription'
})
export class TypeDescriptionPipe implements PipeTransform {

  transform(pokemon:Poke): string {
    const desc: Record<string,string> = {
      "fire": "Fire represents strength and resilience.",
      "water": "Water represents water and nature.",
      "bug": "Bug represents insects and other small animals.",
      "dragon": "Dragon represents dragons and other mythological creatures.",
      "electric": "Electric represents electricity.",
      "ghost": "Ghost represents ghosts and other supernatural beings.",
      "ice": "Ice represents cold and snow.",
      "fighting": "Fighting represents strength and dexterity.",
      "normal": "Normal represents common Pokémon.",
      "grass": "Grass represents plants and nature.",
      "psychic": "Psychic represents the mind and psyche.",
      "rock": "Rock represents rocks and mountains.",
      "dark": "Dark represents darkness and evil.",
      "ground": "Ground represents the earth and nature.",
      "flying": "Flying represents air and flight.",
      "fairy": "Fairy represents beauty and magic.",
      "poison": "Poison represents toxins and poisons.",
    };




    let description = '';
    console.log(pokemon.types);

    pokemon.types.forEach((type) => {
      console.log(type.type.name);

      description += desc[type.type.name]+' ';
    });
    return description;

  }

}
