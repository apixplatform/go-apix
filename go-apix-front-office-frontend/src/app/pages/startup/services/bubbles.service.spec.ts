import { TestBed } from '@angular/core/testing';

import { BubblesService } from './bubbles.service';

describe('BubblesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BubblesService = TestBed.get(BubblesService);
    expect(service).toBeTruthy();
  });
});
