import { TestBed } from '@angular/core/testing';

import { ConstructorApiService } from './constructor-api.service';

describe('ConstructorApiService', () => {
  let service: ConstructorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstructorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
