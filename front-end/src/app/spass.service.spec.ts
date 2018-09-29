import { TestBed, inject } from '@angular/core/testing';

import { SpassService } from './spass.service';

describe('SpassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpassService]
    });
  });

  it('should be created', inject([SpassService], (service: SpassService) => {
    expect(service).toBeTruthy();
  }));
});
