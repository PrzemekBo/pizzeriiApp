import {async, inject, TestBed} from '@angular/core/testing';

import {DishesService} from './dishes.service';
import {Dish} from '../models/dish.model';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

fdescribe('DishesService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let dishesService: DishesService;
  const testUrl = '/api/dishes';


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishesService],
      imports: [
        HttpClientTestingModule
      ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    dishesService = TestBed.get(DishesService);
  });


  it('can test HttpClient.get', () => {
    const testData: Dish[] = [<Dish>{}, <Dish>{}];

    httpClient.get<Dish>(testUrl)
      .subscribe(data =>
        expect(data).toEqual(testData)
      );

    const req = httpTestingController.expectOne(testUrl);


    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  });

  it('should GET when getDishes', inject([DishesService], (service: DishesService) => {
    const testData: Dish[] = [<Dish>{}, <Dish>{}];
    const dishesUrl = '/api/dishes';
    dishesService.getDishes().subscribe(
      dishes => expect(dishes).toEqual(testData, 'should return expected dishes'),
      fail
    );

    const req = httpTestingController.expectOne(dishesUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  }));


  it('should GET when getDishe', inject([DishesService], (service: DishesService) => {

    const testData: Dish[] = [<Dish>{}, <Dish>{}];

    const idOfDish = 1;
    const disheUrl = `/api/dishes/${idOfDish}`;
    dishesService.getDishe(idOfDish).subscribe(
      dishes => expect(dishes).toEqual(testData, 'should return expected dishes'),
      fail
    );

    const req = httpTestingController.expectOne(disheUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  }));


  it('should GET when getPizza', inject([DishesService], (service: DishesService) => {
    const testData: Dish[] = [<Dish>{}, <Dish>{}];
    const pizzaUrl = '/api/dishes/?type=pizza';
    dishesService.getPizza().subscribe(
      dishes => expect(dishes).toEqual(testData, 'should return expected pizza'),
      fail
    );

    const req = httpTestingController.expectOne(pizzaUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  }));

  it('should GET when getPasta', inject([DishesService], (service: DishesService) => {
    const testData: Dish[] = [<Dish>{}, <Dish>{}];
    const pastaUrl = '/api/dishes/?type=pasta';
    dishesService.getPasta().subscribe(
      dishes => expect(dishes).toEqual(testData, 'should return expected pasta'),
      fail
    );

    const req = httpTestingController.expectOne(pastaUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  }));


  it('should GET when getDrink', inject([DishesService], (service: DishesService) => {
    const testData: Dish[] = [<Dish>{}, <Dish>{}];
    const drinkUrl = '/api/dishes/?type=drink';
    dishesService.getDrink().subscribe(
      dishes => expect(dishes).toEqual(testData, 'should return expected drink'),
      fail
    );

    const req = httpTestingController.expectOne(drinkUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  }));


  it(`should expect a GET /api/dishes/?type=drink`, async(inject([HttpClient, HttpTestingController],
    (http: HttpClient, backend: HttpTestingController) => {
      http.get('/api/dishes/?type=drink').subscribe();

      backend.expectOne({
        url: '/api/dishes/?type=drink',
        method: 'GET'
      });
    })));


});
