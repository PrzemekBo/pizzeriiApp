import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { DishesListComponent } from './dishes-list.component';
import {DishesService} from './dishes.service';
import {Dish} from '../models/dish.model';

describe('DishesListComponent', () => {
  let component: DishesListComponent;
  let fixture: ComponentFixture<DishesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
