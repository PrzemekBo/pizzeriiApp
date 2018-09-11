import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DishesListComponent} from './dishes-list/dishes-list.component';
import {ShoppingCardComponent} from './shopping-card/shopping-card.component';
import {FormAddressComponent} from './form-address/form-address.component';

const routes: Routes = [
  {path: 'dishes-list', component: DishesListComponent},
  {path: '', redirectTo: 'dishes-list', pathMatch: 'full'},
  {path: 'shopping-card', component: ShoppingCardComponent},
  {path: 'summary', component: FormAddressComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
