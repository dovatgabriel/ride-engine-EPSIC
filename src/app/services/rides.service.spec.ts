import { TestBed } from '@angular/core/testing';

import { RidesService } from './rides.service';

describe('RidesService', () => {
  let service: RidesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RidesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
