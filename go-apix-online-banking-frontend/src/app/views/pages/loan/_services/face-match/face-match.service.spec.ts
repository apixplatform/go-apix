import { TestBed } from '@angular/core/testing';

import { FaceMatchService } from './face-match.service';

describe('FaceMatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaceMatchService = TestBed.get(FaceMatchService);
    expect(service).toBeTruthy();
  });
});
