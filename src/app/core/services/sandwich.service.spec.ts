import { TestBed, inject } from '@angular/core/testing';

import { BroodjeService } from './sandwich.service';

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
