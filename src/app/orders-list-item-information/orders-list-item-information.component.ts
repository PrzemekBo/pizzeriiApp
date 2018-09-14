import { Component, OnInit } from '@angular/core';
import {Order} from '../models/order.model';
import {Subscription} from 'rxjs';
import {OrderService} from '../order.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orders-list-item-information',
  templateUrl: './orders-list-item-information.component.html',
  styleUrls: ['./orders-list-item-information.component.scss']
})
export class OrdersListItemInformationComponent implements OnInit {

  order: Order;
  sub: Subscription;

  constructor(readonly ordersService: OrderService,
              readonly route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.ordersService.getOrder(+id).subscribe(res => this.order = res);
  }

  changeStatusOfOrderToAccepted(){
    this.order.state = 'Accepted';
    this.sub = this.ordersService.changeOrderStatus(this.order).subscribe();
  }

  changeStatusOfOrderToSend(){
    this.order.state = 'Send';
    this.sub = this.ordersService.changeOrderStatus(this.order).subscribe();
  }

  changeStatusOfOrderToDelivered(){
    this.order.state = 'Delivered';
    this.sub = this.ordersService.changeOrderStatus(this.order).subscribe();
  }

  changeStatusOfOrderToProblems(){
    this.order.state = 'Problems';
    this.sub = this.ordersService.changeOrderStatus(this.order).subscribe();
  }


}
