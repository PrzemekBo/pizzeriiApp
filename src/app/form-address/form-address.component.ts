import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Dish} from '../models/dish.model';
import {Order} from '../models/order.model';
import {FormControl, FormGroup} from '@angular/forms';
import {DishesService} from '../dishes.service';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.scss']
})
export class FormAddressComponent implements OnInit {

  sub: Subscription;
  order: Order;
  dishes: Dish[];
  dishesIds: number[];

  angularForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    telephone: new FormControl(),
    email: new FormControl(),
    city: new FormControl(),
    street: new FormControl()
  });


  constructor(readonly orderService: OrderService, readonly dishesService: DishesService) {
    this.dishesIds = [];
    this.order = <Order>{};
  }


  ngOnInit() {
    this.getDishes();
  }


  createOrder(): void {
    this.order.dishIds = this.dishesIds;
    this.order.firstName = this.angularForm.get('firstName').value;
    this.order.lastName = this.angularForm.get('lastName').value;
    this.order.city = this.angularForm.get('city').value;
    this.order.street = this.angularForm.get('street').value;
    this.order.email = this.angularForm.get('email').value;
    this.order.telephone = this.angularForm.get('telephone').value;
    this.order.state = 'Accepted';
    this.order.date = new Date();
    this.sub = this.orderService.createOrder(this.order).subscribe();
  }

  getDishes(): void {
    this.dishes = this.dishesService.getShoppingCardDishes();
    this.dishes.forEach(dish => this.dishesIds.push(dish.id));
  }
}
