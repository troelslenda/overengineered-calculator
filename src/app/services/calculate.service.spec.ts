const FirestoreStub = {
  collection: (name: string) => ({
    doc: (_id: string) => ({
      valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
      set: (_d: any) => new Promise((resolve, _reject) => resolve())
    })
  })
};

import { TestBed } from '@angular/core/testing';

TestBed.configureTestingModule({
  providers: [{ provide: AngularFirestore, useValue: FirestoreStub }],
  imports: [AngularFireModule]
});

import { CalculateService } from './calculate.service';

describe('CalculateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculateService = TestBed.get(CalculateService);
    expect(service).toBeTruthy();
  });
});
