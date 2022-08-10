import { TestBed } from '@angular/core/testing';

import { EditGuestService } from './edit-guest.service';

describe('EditGuestService', () => {
  let service: EditGuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditGuestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
