import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsInputLabel } from './forms-input-label';

describe('FormsInputLabel', () => {
  let component: FormsInputLabel;
  let fixture: ComponentFixture<FormsInputLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsInputLabel],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsInputLabel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
