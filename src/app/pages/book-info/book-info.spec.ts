import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInfo } from './book-info';

describe('BookInfo', () => {
  let component: BookInfo;
  let fixture: ComponentFixture<BookInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(BookInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
