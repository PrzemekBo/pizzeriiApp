import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {Dish} from './models/dish.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  shoppingCardDishes: Dish[];
  basketCost: number;

  constructor(readonly http: HttpClient) {
    this.shoppingCardDishes = [];
    this.basketCost = 0;
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes')
  .pipe(map(dish => dish.filter(av => av.isAvailable)));
  }

  getDishe(id: number): Observable<Dish> {
    return this.http.get<Dish>(`/api/dishes/${id}`);
  }

  getPizza(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes/?type=pizza')
  .pipe(map(dish => dish.filter(av => av.isAvailable)));
  }
  getPasta(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes/?type=pasta')
      .pipe(map(dish => dish.filter(av => av.isAvailable)));
  }

  getDrink(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes/?type=drink')
      .pipe(map(dish => dish.filter(av => av.isAvailable)));
  }

  getShoppingCardDishes() {
    return this.shoppingCardDishes;
  }


  addDishToShoppingCard(dish: Dish): void {
    this.shoppingCardDishes.push(dish);
    this.calculateBasketCost();
  }

  calculateBasketCost(): number{
    this.basketCost = 0;
    this.shoppingCardDishes.forEach(dish => this.basketCost += parseFloat(dish.price));
    return this.basketCost;
  }

  deleteFromBasket(index: number) {
    this.shoppingCardDishes.splice(index, 1);
    this.calculateBasketCost();
  }


}
