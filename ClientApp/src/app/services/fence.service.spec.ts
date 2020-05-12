import { TestBed } from '@angular/core/testing';

import { FenceService } from './fence.service';

describe('FenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FenceService = TestBed.get(FenceService);
    expect(service).toBeTruthy();
  });
});
