import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListItemInformationComponent } from './orders-list-item-information.component';

describe('OrdersListItemInformationComponent', () => {
  let component: OrdersListItemInformationComponent;
  let fixture: ComponentFixture<OrdersListItemInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersListItemInformationComponent ]
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
});
