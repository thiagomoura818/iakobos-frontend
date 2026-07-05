import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectReference } from './direct-reference';

describe('DirectReference', () => {
  let component: DirectReference;
  let fixture: ComponentFixture<DirectReference>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectReference],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectReference);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
