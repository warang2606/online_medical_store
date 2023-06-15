import { TestBed } from '@angular/core/testing';

import { MedicalstoreService } from './medicalstore.service';

describe('MedicalstoreService', () => {
  let service: MedicalstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
