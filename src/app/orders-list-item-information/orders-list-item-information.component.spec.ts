import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrdersListItemInformationComponent} from './orders-list-item-information.component';
import {OrderService} from '../orders-list/order.service';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {Order} from '../models/order.model';

describe('OrdersListItemInformationComponent', () => {
  let component: OrdersListItemInformationComponent;
  let fixture: ComponentFixture<OrdersListItemInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersListItemInformationComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [OrderService]


    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListItemInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change state of order to Problems', () => {
    const order: Order = <Order>{state: 'Delivered'};
    const ordersService = TestBed.get(OrderService);
    const changeStateOfOrder = spyOn(ordersService, 'changeOrderStatus');

    changeStateOfOrder.and.returnValue(of([]));

    component.order = order;

    component.changeStatusOfOrderToAccepted();

    expect(component.order.state).toBe('Problems');
    expect(changeStateOfOrder).toHaveBeenCalled();
  });

  it('should change state of order to Delivered', () => {
    const order: Order = <Order>{state: 'Problems'};
    const ordersService = TestBed.get(OrderService);
    const changeStateOfOrder = spyOn(ordersService, 'changeOrderStatus');

    changeStateOfOrder.and.returnValue(of([]));

    component.order = order;

    component.changeStatusOfOrderToAccepted();

    expect(component.order.state).toBe('Delivered');
    expect(changeStateOfOrder).toHaveBeenCalled();
  });


});
