import { TestBed } from '@angular/core/testing';

import { DriverStandingApiService } from './driver-standing-api.service';

describe('DriverStandingApiService', () => {
  let service: DriverStandingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverStandingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
