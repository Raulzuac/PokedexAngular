// To parse this data:
//
//   import { Convert, Pokedex } from "./file";
//
//   const pokedex = Convert.toPokedex(json);

export interface Pokedex {
  count:    number;
  results:  Pokemon[];
}

export interface Pokemon {
  name: string;
  url:  string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toPokedex(json: string): Pokedex {
      return JSON.parse(json);
  }

  public static pokedexToJson(value: Pokedex): string {
      return JSON.stringify(value);
  }
}
