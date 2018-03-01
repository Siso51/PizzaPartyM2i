import { InMemoryDbService } from "angular-in-memory-web-api";
import Pizza from '../model/pizza.model';

export class FakeApi implements InMemoryDbService{
    createDb(){
        let pizzas: Pizza[] = [
            {id: 1, name: "Regina", prix: 9.99 },
            {id: 2, name: "Royale", prix: 12.99 },
            {id: 3, name: "4 fromages", prix: 14.99 },
            {id: 4, name: "Royale", prix: 12.99 },
            {id: 5, name: "Texan", prix: 16.99 },
            {id: 6, name: "Océane", prix: 9.99 },
            {id: 7, name: "Blanche", prix: 18.99 },
            {id: 8, name: "4 saisons", prix: 12.99 },
            {id: 9, name: "Reine", prix: 14.99 },
            {id: 10, name: "Cowboy", prix: 12.99 },
            {id: 11, name: "Champion", prix: 7.99 },
            {id: 12, name: "Exotique", prix: 120.99 },
            {id: 13, name: "7 fromages", prix: 14.99 },
            {id: 14, name: "Rémoise", prix: 12.99 },
            {id: 15, name: "Parisienne", prix: 14.99 }
        ];

        return {pizzas};
    }
}