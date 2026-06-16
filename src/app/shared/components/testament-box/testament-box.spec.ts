import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestamentBox } from './testament-box';

describe('TestamentBox', () => {
  let component: TestamentBox;
  let fixture: ComponentFixture<TestamentBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestamentBox],
    }).compileComponents();

    fixture = TestBed.createComponent(TestamentBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
