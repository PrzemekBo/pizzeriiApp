import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DishesListComponent} from './dishes-list/dishes-list.component';
import {ShoppingCardComponent} from './shopping-card/shopping-card.component';
import {FormAddressComponent} from './form-address/form-address.component';
import {OrdersListItemInformationComponent} from './orders-list-item-information/orders-list-item-information.component';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {AccessComponent} from './access/access.component';
import {AuthGuard} from './auth/auth.guard';
import {DishesListItemInformationComponent} from './dishes-list-item-information/dishes-list-item-information.component';

const routes: Routes = [
  {path: '', component: DishesListComponent},
  /*  {path: '', redirectTo: 'dishes-list', pathMatch: 'full'},*/
  {path: 'shopping-card', component: ShoppingCardComponent},
  {path: 'summary', component: FormAddressComponent},
  {path: 'dishes/:id', component: DishesListItemInformationComponent, canActivate: [AuthGuard]},
  {path: 'orders-list', component: OrdersListComponent, canActivate: [AuthGuard]},
  {path: 'orders/:id', component: OrdersListItemInformationComponent, canActivate: [AuthGuard]},
  {path: 'login', component: AccessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
