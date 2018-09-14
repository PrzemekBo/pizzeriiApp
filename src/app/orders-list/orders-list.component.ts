import { Component, OnInit } from '@angular/core';
import {Order} from '../models/order.model';
import {Observable, Subscription} from 'rxjs';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders$: Observable<Order[]>;

  constructor(private readonly ordersService: OrderService) { }

  ngOnInit() {
    this.orders$ = this.ordersService.getOrders();
  }

}
