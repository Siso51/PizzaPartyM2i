import { Component, OnInit } from '@angular/core';
import Pizza from '../model/pizza.model';
import { PizzaApiServiceService } from '../service/pizza-api-service.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  //styleUrls: ['./pizza-list.component.css']
  styles: [`
  .rowPizza {
    cursor: pointer
  }
  `]
})
export class PizzaListComponent implements OnInit {
  //name: string = "4 fromages";
  //pizza: Pizza = {id: 1, name: "Regina", prix: 12.99 };
  selectedPizza: Pizza;
  /*pizzas: Array<Pizza> = [
    {id: 1, name: "Regina", prix: 9.99 },
    {id: 2, name: "Royale", prix: 12.99 },
    {id: 3, name: "4 fromages", prix: 14.99 }
  ];*/
  pizzas: Pizza[];

  pizzaToDelete = null;
  newPizza: Pizza = {id: null, name: null, prix: null};

  constructor(private api:PizzaApiServiceService) { 
    /* Plus pour les injections de dépendances*/
    /* Pour les initialisations de variables, privilégiez le ngOnInit() */
  }

  ngOnInit() {    
    this.api.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
    this.api.getPizza(1).subscribe(pizza => this.selectedPizza = pizza);
  }
  
  showPizza(pizza: Pizza):void {
    this.selectedPizza = pizza;
  }

  createPizza():void{
    let id = 0;
    
    if(this.pizzas.length > 0){
      id = this.pizzas[this.pizzas.length-1].id;
    }

    this.newPizza.id = ++id;
      
      this.api.createPizza(this.newPizza).subscribe(() => {
        this.pizzas.push(this.newPizza);
        this.newPizza  = {id: null, name: null, prix: null};
      });  
  }

  deletePizza(pizza):void{
    this.api.deletePizza(pizza).subscribe(
      () => {
        this.pizzas = this.pizzas.filter((element) => {
          return element !== pizza;
        });
      }
    );
  }

  isValid():boolean {
    return !!this.newPizza.name && !!this.newPizza.prix;
  }

}
