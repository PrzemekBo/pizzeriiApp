import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DishesListItemComponent} from './dishes-list-item.component';
import {DishesService} from '../dishes-list/dishes.service';
import {AccessService} from '../access/access.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {Dish} from '../models/dish.model';

fdescribe('DishesListItemComponent', () => {
  let component: DishesListItemComponent;
  let fixture: ComponentFixture<DishesListItemComponent>;
  let dish: Dish;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DishesListItemComponent],
      providers: [DishesService,
        AccessService],
      imports: [
        RouterTestingModule,
        HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesListItemComponent);
    component = fixture.componentInstance;
    dish = <Dish>{};
    component.dish = dish;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call addDishToBasket from DishesService', () => {


    const dishesService = TestBed.get(DishesService);
    const addDishToShoppingCard = spyOn(dishesService, 'addDishToShoppingCard')
    ;

    component.addFoodToCard();

    expect(addDishToShoppingCard).toHaveBeenCalledWith(dish);
  });
});
