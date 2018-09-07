import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../models/dish.model';
import {Subscription} from 'rxjs';
import {DishesService} from '../dishes.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit, OnDestroy {

  dishes: Dish[];
  sub: Subscription;

  constructor(readonly service: DishesService,) {
  }

  ngOnInit() {
    this.sub = this.service.getDishes()
      .subscribe(res => this.dishes = res);
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();

  }

  getPizza(): void {
    this.sub = this.service.getPizza()
      .subscribe(res => this.dishes = res);
  }

  getPasta(): void {
    this.sub = this.service.getPasta()
      .subscribe(res => this.dishes = res);
  }

  getDrink(): void {
    this.sub = this.service.getDrink()
      .subscribe(res => this.dishes = res);
  }
}
