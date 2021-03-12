import { TestBed } from '@angular/core/testing';

import { CategoryValueService } from './category-value.service';

describe('CategoryValueService', () => {
  let service: CategoryValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
