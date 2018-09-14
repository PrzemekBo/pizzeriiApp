import {Component, OnInit} from '@angular/core';
import {Dish} from '../models/dish.model';
import {Observable} from 'rxjs';
import {DishesService} from './dishes.service';
import {AccessService} from '../access/access.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit {

  dishes$: Observable<Dish[]>;


  constructor(readonly accessService: AccessService,
              private readonly service: DishesService) {
  }

  ngOnInit() {
    this.getAllDishes();
  }


  getPizza(): void {
    this.dishes$ = this.service.getPizza();


  }


  getPasta(): void {
    this.dishes$ = this.service.getPasta();
  }

  getDrink(): void {
    this.dishes$ = this.service.getDrink();
  }

  getAllDishes(): void {
    this.dishes$ = this.service.getDishes();
  }
}
