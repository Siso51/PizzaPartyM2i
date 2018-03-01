import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/interval";
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import Pizza from '../model/pizza.model';
import { PizzaApiServiceService } from '../service/pizza-api-service.service';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //observable = Observable.interval(300).map(number => number * 2).take(12);
  observable2 = new Observable((observer) => {
    observer.next(4)
  });
  observable_recherche = new Subject();
  searchTerm:string;
  pizzas: Pizza[];

  constructor(private api:PizzaApiServiceService) { 

  }

  ngOnInit() {
    this.observable_recherche.pipe(
      debounceTime(500),
      switchMap((searchTerm: string) => this.api.searchPizza(searchTerm))
    ).subscribe(
      pizzas => this.pizzas = pizzas
    );
    
    
  }

  onKey(value){
    this.observable_recherche.next(value);

    /* this.api.searchPizza(value).subscribe(
      pizzas => this.pizzas = pizzas
    ); */
  }

}
