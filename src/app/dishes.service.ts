import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dish} from './models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(readonly http: HttpClient) { }

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




}
