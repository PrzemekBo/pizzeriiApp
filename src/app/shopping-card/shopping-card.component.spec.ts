import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShoppingCardComponent} from './shopping-card.component';
import {DishesService} from '../dishes-list/dishes.service';
import {HttpClientModule} from '@angular/common/http';
import {Dish} from '../models/dish.model';

fdescribe('ShoppingCardComponent', () => {
  let component: ShoppingCardComponent;
  let fixture: ComponentFixture<ShoppingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCardComponent],
      providers: [
        DishesService
      ],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get basket dishes and return length of two', () => {
    let dish: Dish = <Dish>{};
    let dishes: Dish[];

    dishes = [dish, dish];

    const dishesService = TestBed.get(DishesService);
    const getShoppingCardDishesSpy = spyOn(dishesService, 'getShoppingCardDishes');

    getShoppingCardDishesSpy.and.returnValue(dishes);

    component.getShoppingCardDishes();

    expect(component.dishes.length).toBe(2);
    expect(getShoppingCardDishesSpy).toHaveBeenCalled();
  });

  it('should call deleteFromBasket from DishesService', () => {
    const dishesService = TestBed.get(DishesService);
    const deleteFromBasket = spyOn(dishesService, 'deleteFromBasket');

    component.deleteFromBasket(1);

    expect(deleteFromBasket).toHaveBeenCalled();
  });


});
