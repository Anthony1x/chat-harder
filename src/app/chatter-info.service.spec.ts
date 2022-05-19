import { TestBed } from '@angular/core/testing';

import { ChatterInfoService } from './chatter-info.service';

describe('ChatterInfoService', () => {
  let service: ChatterInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatterInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
