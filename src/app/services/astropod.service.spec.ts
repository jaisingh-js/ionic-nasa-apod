import { TestBed } from '@angular/core/testing';

import { AstropodService } from './astropod.service';

describe('AstropodService', () => {
  let service: AstropodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AstropodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
