import { TestBed } from '@angular/core/testing';

import { LivreServiceService } from './livre-service.service';

describe('LivreServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivreServiceService = TestBed.get(LivreServiceService);
    expect(service).toBeTruthy();
  });
});
