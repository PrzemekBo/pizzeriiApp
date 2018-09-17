import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../models/order.model';
import {Observable} from 'rxjs';
import {OrderService} from './order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, OnDestroy {

  orders$: Observable<Order[]>;
  interval: any;

  constructor(private readonly orderService: OrderService) {
  }

  ngOnInit() {
    this.getOrders();
    this.interval = setInterval(() => {
      this.getOrders();
    }, 20000);
  }

  getOrders(): void {
    this.orders$ = this.orderService.getOrders();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
