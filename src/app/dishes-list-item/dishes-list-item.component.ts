import {Component, Input} from '@angular/core';
import {Dish} from '../models/dish.model';
import {DishesService} from '../dishes-list/dishes.service';
import {AccessService} from '../access/access.service';


@Component({
  selector: 'app-dishes-list-item',
  templateUrl: './dishes-list-item.component.html',
  styleUrls: ['./dishes-list-item.component.scss']
})
export class DishesListItemComponent {

  @Input() dish: Dish;

  constructor(
    readonly service: DishesService,
    readonly accessService: AccessService) { }

  addFoodToCard() {
    this.service.addDishToShoppingCard(this.dish);
  }



}
