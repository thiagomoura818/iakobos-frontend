import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookResultReference } from './book-result-reference';

describe('BookResultReference', () => {
  let component: BookResultReference;
  let fixture: ComponentFixture<BookResultReference>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookResultReference],
    }).compileComponents();

    fixture = TestBed.createComponent(BookResultReference);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
