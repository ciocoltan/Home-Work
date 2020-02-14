import { TestBed } from '@angular/core/testing';

import { ApihttpuserService } from './apihttpuser.service';

describe('ApihttpuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApihttpuserService = TestBed.get(ApihttpuserService);
    expect(service).toBeTruthy();
  });
});
