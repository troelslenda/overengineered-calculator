import { TestBed } from '@angular/core/testing';

import { FirestoreCalculationsService } from './firestore-calculations.service';

describe('FirestoreCalculationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreCalculationsService = TestBed.get(FirestoreCalculationsService);
    expect(service).toBeTruthy();
  });
});
