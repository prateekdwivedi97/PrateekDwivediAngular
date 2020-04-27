import { TestBed } from '@angular/core/testing';

import { PservService } from './pserv.service';

describe('PservService', () => {
  let service: PservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
