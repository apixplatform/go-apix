import { TestBed } from '@angular/core/testing';

import { VizorService } from './vizor.service';

describe('VizorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VizorService = TestBed.get(VizorService);
    expect(service).toBeTruthy();
  });
});
