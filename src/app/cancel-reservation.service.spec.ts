import { TestBed } from '@angular/core/testing';

import { CancelReservationService } from './cancel-reservation.service';

describe('CancelReservationService', () => {
  let service: CancelReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancelReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
