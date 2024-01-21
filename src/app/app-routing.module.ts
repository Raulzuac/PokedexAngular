import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { waitGuard } from './pokedex/guards/wait.guard';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'pokedex',
  },
  {
    path:'pokedex',
    loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule),
    canActivate:[waitGuard],
  },

  {
    path:'error',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
