import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Pizza from '../model/pizza.model';
import { PizzaApiServiceService } from '../service/pizza-api-service.service';

import "rxjs/add/operator/switchMap";

@Component({
  selector: 'app-pizza-single',
  templateUrl: './pizza-single.component.html',
  styleUrls: ['./pizza-single.component.css']
})
export class PizzaSingleComponent implements OnInit {
  selectedPizza: Pizza;

  constructor(
    private pizzaService:PizzaApiServiceService,
    private route:ActivatedRoute
  ) { 

  }

  ngOnInit() {
    /*let id = parseInt(this.route.snapshot.params.id || 0) || 0;
    this.pizzaService.getPizza(id).subscribe(
      pizza => this.selectedPizza = pizza
    );*/

    this.route.params.switchMap(
      params => {
        let id = parseInt(params['id'] || 0) || 0;
        return this.pizzaService.getPizza(id)
    }).subscribe(
      pizza => {
        console.log(pizza);
        this.selectedPizza = pizza;
    });

    
  }

}
