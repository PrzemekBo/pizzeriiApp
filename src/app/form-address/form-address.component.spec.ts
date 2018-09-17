import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormAddressComponent} from './form-address.component';
import {ShoppingCardComponent} from '../shopping-card/shopping-card.component';
import {OrderService} from '../orders-list/order.service';
import {DishesService} from '../dishes-list/dishes.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Order} from '../models/order.model';
import {of} from 'rxjs';

fdescribe('FormAddressComponent', () => {
  let component: FormAddressComponent;
  let fixture: ComponentFixture<FormAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddressComponent,
        ShoppingCardComponent],
      providers: [
        OrderService,
        DishesService,
      ],
      imports: [ReactiveFormsModule,
        HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should  new create order', () => {
    const order: Order = <Order>{};

    const orderService = TestBed.get(OrderService);
    const createOrderSpy = spyOn(orderService, 'createOrder');

    createOrderSpy.and.returnValue(of([]));

    component.order = order;
    component.createOrder();

    expect(component.order.date);
    expect(component.order.state).toBe('Accepted');
    expect(createOrderSpy).toHaveBeenCalled();
  });

  it('should have 3 object in dishesIds', () => {
    const dishesService = TestBed.get(DishesService);
    const getShoppingCardDishesSpy = spyOn(dishesService, 'getShoppingCardDishes');

    getShoppingCardDishesSpy.and.returnValue(of([], [], []));

    component.getDishes();

    expect(getShoppingCardDishesSpy).toHaveBeenCalled();
    expect(component.dishesIds.length).toBe(3);
  });

});
