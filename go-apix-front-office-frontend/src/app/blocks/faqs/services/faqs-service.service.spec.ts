import { TestBed } from '@angular/core/testing';

import { FaqsService } from './faqs.service';

describe('FaqsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaqsService = TestBed.get(FaqsService);
    expect(service).toBeTruthy();
  });
});
