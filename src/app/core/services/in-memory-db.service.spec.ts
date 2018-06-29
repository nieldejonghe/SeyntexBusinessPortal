import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDbService } from './in-memory-db.service';

describe('InMemoryDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDbService]
    });
  });

  it('should be created', inject([InMemoryDbService], (service: InMemoryDbService) => {
    expect(service).toBeTruthy();
  }));
});
