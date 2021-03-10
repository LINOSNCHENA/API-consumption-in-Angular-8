import { TestBed } from '@angular/core/testing';

import { ZhttpService } from './zhttp.service';

describe('ZhttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZhttpService = TestBed.get(ZhttpService);
    expect(service).toBeTruthy();
  });
});
