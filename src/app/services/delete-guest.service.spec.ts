import { TestBed } from '@angular/core/testing';

import { DeleteGuestService } from './delete-guest.service';

describe('DeleteGuestService', () => {
  let service: DeleteGuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteGuestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
