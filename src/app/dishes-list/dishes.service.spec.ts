import {inject, TestBed} from '@angular/core/testing';

import {DishesService} from './dishes.service';
import {Dish} from '../models/dish.model';
import {HttpClientModule} from '@angular/common/http';

describe('DishesService', () => {



  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishesService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([DishesService], (service: DishesService) => {
    expect(service).toBeTruthy();
  }));


  it('should add dish to basket', inject([DishesService], (service: DishesService) => {
    const dish = <Dish>{};

    service.addDishToShoppingCard(dish);
    service.addDishToShoppingCard(dish);

    expect(service.shoppingCardDishes.length).toBe(2);
  }));


  it('should delete dish from basket', inject([DishesService], (service: DishesService) => {
    const dish = <Dish>{};

    service.addDishToShoppingCard(dish);
    service.addDishToShoppingCard(dish);
    service.addDishToShoppingCard(dish);


    service.deleteFromBasket(2);

    expect(service.shoppingCardDishes.length).toBe(2);
  }));

  it('should calculate cost of dishes', inject([DishesService], (service: DishesService) => {
    const dish = <Dish>{
      price: 10
    };
    service.addDishToShoppingCard(dish);
    service.addDishToShoppingCard(dish);
    service.addDishToShoppingCard(dish);
    service.addDishToShoppingCard(dish);
    service.addDishToShoppingCard(dish);

    expect(service.calculateBasketCost()).toBe(50);
  }));
});
