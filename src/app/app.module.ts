import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { DishesListItemComponent } from './dishes-list-item/dishes-list-item.component';

import { DishesListComponent } from './dishes-list/dishes-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ShoppingCardComponent} from './shopping-card/shopping-card.component';
import { FormAddressComponent } from './form-address/form-address.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersListItemComponent } from './orders-list-item/orders-list-item.component';



@NgModule({
  declarations: [
    AppComponent,
    DishesListItemComponent,
    DishesListComponent,
    ShoppingCardComponent,
    FormAddressComponent,
    OrdersListComponent,
    OrdersListItemComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
