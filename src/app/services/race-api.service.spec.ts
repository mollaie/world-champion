import { TestBed } from '@angular/core/testing';

import { RaceApiService } from './race-api.service';

describe('RaceApiService', () => {
  let service: RaceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
