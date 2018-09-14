import {Component, OnInit} from '@angular/core';
import {Dish} from '../models/dish.model';
import {Subscription} from 'rxjs';
import {DishesService} from '../dishes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dishes-list-item-information',
  templateUrl: './dishes-list-item-information.component.html',
  styleUrls: ['./dishes-list-item-information.component.scss']
})
export class DishesListItemInformationComponent implements OnInit {

  dish: Dish = <Dish>{};
  sub: Subscription;

  constructor(readonly dishesService: DishesService,
              readonly route: ActivatedRoute) {
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dishesService.getDishe(+id).subscribe(res => this.dish = res);
  }


  changeStatusOfDish() {
    this.dish.isAvailable = !this.dish.isAvailable;
    this.sub = this.dishesService.changeStatusOfDish(this.dish).subscribe();
  }


}


