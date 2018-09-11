import { Component, OnInit } from '@angular/core';
import {Order} from '../models/order.model';
import {Subscription} from 'rxjs';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders: Order[];
  sub: Subscription;

  constructor(readonly orderService: OrderService) { }

  ngOnInit() {
    this.sub = this.orderService.getOrders().subscribe(res => this.orders = res);
  }

}
