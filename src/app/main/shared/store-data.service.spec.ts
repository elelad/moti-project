/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoreDataService } from './store-data.service';

describe('StoreDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreDataService]
    });
  });

  it('should ...', inject([StoreDataService], (service: StoreDataService) => {
    expect(service).toBeTruthy();
  }));
});