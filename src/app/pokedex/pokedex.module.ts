import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { InfoComponent } from './components/info/info.component';
import { AsideComponent } from './components/aside/aside.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { ItemsComponent } from './components/items/items.component';
import { PokemonbgPipe } from './pipes/pokemonbg.pipe';
import { TypeDescriptionPipe } from './pipes/type-description.pipe';


@NgModule({
  declarations: [
    InfoComponent,
    AsideComponent,
    PokemonComponent,
    ItemsComponent,
    PokemonbgPipe,
    TypeDescriptionPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PokedexRoutingModule
  ],
  exports:[
    InfoComponent,
    AsideComponent
  ]
})
export class PokedexModule { }
