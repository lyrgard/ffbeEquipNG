import { TestBed } from '@angular/core/testing';

import { StaticDataService } from './static-data.service';

describe('StaticDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticDataService = TestBed.get(StaticDataService);
    expect(service).toBeTruthy();
  });
});
