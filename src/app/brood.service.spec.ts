import { TestBed, inject } from '@angular/core/testing';

import { BroodService } from './brood.service';

describe('BroodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroodService]
    });
  });

  it('should be created', inject([BroodService], (service: BroodService) => {
    expect(service).toBeTruthy();
  }));
});
