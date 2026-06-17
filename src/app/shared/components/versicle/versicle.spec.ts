import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Versicle } from './versicle';

describe('Versicle', () => {
  let component: Versicle;
  let fixture: ComponentFixture<Versicle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Versicle],
    }).compileComponents();

    fixture = TestBed.createComponent(Versicle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
