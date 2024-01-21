import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Item } from '../../interfaces/item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  Item?:Item;


  constructor(private service:PokemonsService) {
    this.Item = this.service.Item;
   }
  nextItem(){
    this.service.nextItem();
    this.Item = this.service.Item;

  }
  previousItem() {
    this.service.previousItem();
    this.Item = this.service.Item;


  }
}
