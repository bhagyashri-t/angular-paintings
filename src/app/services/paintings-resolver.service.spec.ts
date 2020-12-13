import { TestBed } from '@angular/core/testing';

import { PaintingsResolverService } from './paintings-resolver.service';

describe('PaintingsResolverService', () => {
  let service: PaintingsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaintingsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
