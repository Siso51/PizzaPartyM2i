import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import Pizza from '../model/pizza.model';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class PizzaApiServiceService {

  constructor(private http:HttpClient) { }

  createPizza(pizza:Pizza): Observable<Pizza>{
    return this.http.post<Pizza>('api/pizzas', pizza);
  }

  deletePizza(pizza): Observable<Pizza>{
    return this.http.delete<Pizza>(`api/pizzas/${pizza.id}`);
  }

  getPizzas(): Observable<Pizza[]> {

    return this.http.get<Pizza[]>('api/pizzas');

    /*return Promise.resolve([
      {id: 1, name: "Regina", prix: 9.99 },
      {id: 2, name: "Royale", prix: 12.99 },
      {id: 3, name: "4 fromages", prix: 14.99 }
    ]);*/
  }

  /*getPizzasSlow(): Promise<Pizza[]> {
    return new Promise(
      resolve => 
        {
          setTimeout(() => resolve(
            this.getPizzas()
          ), 5000)
        }
    );
}*/

  searchPizza(search: string): Observable<Pizza[]>{
    // return this.http.get<Pizza[]>(`api/pizzas/?name=${search}`);
    return this.http.get<Pizza[]>(`api/pizzas/?name=${search}`).pipe(
      tap( 
        () => console.log(`Recherche sur ${search}`) 
      )
    );
  }

  getPizza(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`api/pizzas/${id}`);

    /*return this.getPizzas().then(
      pizzas => pizzas.find(
        (pizza) => pizza.id === id
      )
    );*/
  }
}
