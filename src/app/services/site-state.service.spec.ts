import { TestBed } from '@angular/core/testing';

import { SiteStateService } from './site-state.service';

describe('SiteStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteStateService = TestBed.get(SiteStateService);
    expect(service).toBeTruthy();
  });
});
