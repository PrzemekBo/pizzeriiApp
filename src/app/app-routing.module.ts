import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DishesListComponent} from './dishes-list/dishes-list.component';
import {ShoppingCardComponent} from './shopping-card/shopping-card.component';

const routes: Routes = [
  {path: 'dishes-list', component: DishesListComponent},
  {path: '', redirectTo: 'dishes-list', pathMatch: 'full'},
  {path: 'shopping-card', component: ShoppingCardComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
