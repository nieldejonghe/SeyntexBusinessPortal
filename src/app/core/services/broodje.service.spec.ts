import { TestBed, inject } from '@angular/core/testing';

import { BroodjeService } from './broodje.service';

describe('BroodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroodjeService]
    });
  });

  it('should be created', inject([BroodjeService], (service: BroodjeService) => {
    expect(service).toBeTruthy();
  }));
});
