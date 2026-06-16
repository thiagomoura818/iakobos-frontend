import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookButton } from './book-button';

describe('BookButton', () => {
  let component: BookButton;
  let fixture: ComponentFixture<BookButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookButton],
    }).compileComponents();

    fixture = TestBed.createComponent(BookButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
