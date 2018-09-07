import {Component, OnInit} from '@angular/core';
import {Dish} from '../models/dish.model';
import {DishesService} from '../dishes.service';


@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent implements OnInit {

  dishes: Dish[];
  index: number;

  constructor(readonly service: DishesService) {
    this.index = -1;
  }

  getShoppingCardDishes(): void {
    this.dishes = this.service.getShoppingCardDishes();
    this.setBasketCost();

  }


  ngOnInit() {
    this.getShoppingCardDishes();
  }


  setBasketCost(): void{
    document.getElementById('basket-cost').innerText = this.service.calculateBasketCost().toString();
  }

  setIdsForBasketItems(): string {
    return 'item_' + ++this.index;
  }

  setIdsForButtons(): string {
    return 'button_item_' + this.index;
  }


  deleteFromBasket(index: number, event: Event) {
    this.service.deleteFromBasket(index);
    this.setBasketCost();
    this.index = 0;
    event.stopPropagation();
  }
}
