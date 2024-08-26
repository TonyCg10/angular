import { TestBed } from '@angular/core/testing';

import { DogAdoptService } from './dog-adopt.service';

describe('DogAdoptService', () => {
  let service: DogAdoptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogAdoptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
