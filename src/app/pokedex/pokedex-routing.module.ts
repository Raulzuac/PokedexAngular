import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path: 'info',
        component: InfoComponent,
      },
      {
        path: 'pokemon/:id',
        component: PokemonComponent
      },
      {
        path: 'items',
        component: ItemsComponent
      },
      {
        path: '**',
        redirectTo: 'info'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
