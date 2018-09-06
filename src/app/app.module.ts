import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { DishesListItemComponent } from './dishes-list-item/dishes-list-item.component';

import { DishesListComponent } from './dishes-list/dishes-list.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DishesListItemComponent,
    DishesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
   /* ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
