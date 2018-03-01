//import { BackgroundDirective } from './background.directive';
import { Hamburger } from './hamburger';
import { PizzaApiServiceService } from '../service/pizza-api-service.service';
import { Observable } from 'rxjs/Observable';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';


/*fdescribe('Mon premier test', () => {
  let bigMac;

  beforeEach(() => {
    bigMac = new Hamburger("BigMac", 4.99);
  });

  it('instancier une classe', () => {
    /*const directive = new BackgroundDirective();
    expect(directive).toBeTruthy();*/
    //expect(bigMac).toBeTruthy();
  //});

  //it('getter du name', () => {
    /*const directive = new BackgroundDirective();
    expect(directive).toBeTruthy();*/
    //expect(bigMac.name).toBe("BigMac");
  //});
//});

describe('Test Di Angular', () => {
  it('instancier Pizza Service', () => { 
    TestBed.configureTestingModule({
      providers:[PizzaApiServiceService, HttpClient],
      imports:[HttpClientModule]
    });
    //const PizzaService = new PizzaApiServiceService(null);
    const PizzaService = TestBed.get(PizzaApiServiceService);
    //expect(PizzaService.getPizzas).toBe(jasmine.any(Observable)); /* Marche pas mais l'idée est là*/
  });

  it('instancier Service avec un mock', () => {
    //const FakeHttpClient = "toto";
    const FakeHttpClient = jasmine.createSpyObj("HttpClient", ['get']);
    FakeHttpClient.get.and.returnValue(['toto']);

    TestBed.configureTestingModule({
      providers:[
        {provide: HttpClient, useValue: FakeHttpClient},
        PizzaApiServiceService
      ]
    });
    //const PizzaService = new PizzaApiServiceService(null);
    const PizzaService = TestBed.get(PizzaApiServiceService);
    expect(PizzaService.getPizzas()).toEqual(["toto"]);
  });
});
