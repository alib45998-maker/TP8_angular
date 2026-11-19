import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ParkService } from './park-service';

describe('ParkService', () => {
  let service: ParkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(ParkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
