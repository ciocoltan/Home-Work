import { TestBed } from '@angular/core/testing';

import { ProductIdService } from './product-id.service';

describe('ProductIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductIdService = TestBed.get(ProductIdService);
    expect(service).toBeTruthy();
  });
});
