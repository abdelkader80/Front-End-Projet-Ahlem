import { TestBed } from '@angular/core/testing';

import { AdherantService } from './adherant.service';

describe('AdherantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdherantService = TestBed.get(AdherantService);
    expect(service).toBeTruthy();
  });
});
