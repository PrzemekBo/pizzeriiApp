import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesListItemInformationComponent } from './dishes-list-item-information.component';
import {DishesService} from '../dishes-list/dishes.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {Dish} from '../models/dish.model';
import {of} from 'rxjs';

describe('DishesListItemInformationComponent', () => {
  let component: DishesListItemInformationComponent;
  let fixture: ComponentFixture<DishesListItemInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesListItemInformationComponent ],
      providers: [
        DishesService,
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesListItemInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change status of dish on Available', () => {
    let dish: Dish = <Dish>{isAvailable: false};
    const dishesService = TestBed.get(DishesService);
    const changeStatusOfDishSpy = spyOn(dishesService, 'changeStatusOfDish');

    changeStatusOfDishSpy.and.returnValue(of([]));

    component.dish = dish;
    component.changeStatusOfDish();

    expect(component.dish.isAvailable).toBe(true);
    expect(changeStatusOfDishSpy).toHaveBeenCalled();
  });
});
