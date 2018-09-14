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
  }


  ngOnInit() {
    this.getShoppingCardDishes();
  }



  deleteFromBasket(index: number) {
    this.service.deleteFromBasket(index);
    this.index = 0;
  }
}
