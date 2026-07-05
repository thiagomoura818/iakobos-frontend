import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseResultReference } from './verse-result-reference';

describe('VerseResultReference', () => {
  let component: VerseResultReference;
  let fixture: ComponentFixture<VerseResultReference>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerseResultReference],
    }).compileComponents();

    fixture = TestBed.createComponent(VerseResultReference);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
