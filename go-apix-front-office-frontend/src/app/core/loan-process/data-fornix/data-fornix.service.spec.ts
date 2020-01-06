import { TestBed } from '@angular/core/testing';

import { DataFornixService } from './data-fornix.service';

describe('DataFornixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFornixService = TestBed.get(DataFornixService);
    expect(service).toBeTruthy();
  });
});
