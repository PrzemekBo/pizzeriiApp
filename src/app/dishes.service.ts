import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dish} from './models/dish.model';

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
    return this.http.get<Dish[]>('/api/dishes');
  }

  getDishe(id: number): Observable<Dish> {
    return this.http.get<Dish>(`/api/dishes/${id}`);
  }

  getPizza(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes/?type=pizza');
  }
  getPasta(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes/?type=pasta');
  }

  getDrink(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes/?type=drink');
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
