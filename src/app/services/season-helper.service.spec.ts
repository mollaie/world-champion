import { TestBed } from '@angular/core/testing';

import { SeasonHelperService } from './season-helper.service';

describe('SeasonHelperService', () => {
  let service: SeasonHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeasonHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
