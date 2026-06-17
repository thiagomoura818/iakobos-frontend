import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterRead } from './chapter-read';

describe('ChapterRead', () => {
  let component: ChapterRead;
  let fixture: ComponentFixture<ChapterRead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterRead],
    }).compileComponents();

    fixture = TestBed.createComponent(ChapterRead);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
