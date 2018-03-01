import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from "angular-in-memory-web-api"
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaApiServiceService } from './service/pizza-api-service.service';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';
import { FakeApi } from './service/fake-api.service';

import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import {LOCALE_ID} from "@angular/core";
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { environment } from '../environments/environment';
import { BackgroundDirective } from './directive/background.directive';
import { DropdownDirective } from './directive/dropdown.directive';
import { CounterComponent } from './counter/counter.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaListComponent,
    HomeComponent,
    MenuComponent,
    PizzaSingleComponent,
    BackgroundDirective,
    DropdownDirective,
    CounterComponent,
    RegisterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'pizzas', component: PizzaListComponent},
      {path: 'pizza/:id', component: PizzaSingleComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'contact', component: ContactComponent}
    ]),
    !environment.production ? InMemoryWebApiModule.forRoot(FakeApi) : []
  ],
  providers : [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    PizzaApiServiceService,
    FormBuilder
],
  bootstrap: [AppComponent]
})
export class AppModule { }
