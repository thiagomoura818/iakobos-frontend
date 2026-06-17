import { TestBed } from '@angular/core/testing';

import { VerseTextService } from './verse-text-service';

describe('VerseTextService', () => {
  let service: VerseTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerseTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
