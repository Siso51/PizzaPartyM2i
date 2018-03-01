import { TestBed, inject } from '@angular/core/testing';

import { PizzaApiServiceService } from './pizza-api-service.service';

describe('PizzaApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaApiServiceService]
    });
  });

  it('should be created', inject([PizzaApiServiceService], (service: PizzaApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
