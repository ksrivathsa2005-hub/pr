import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtwo } from './addtwo';

describe('Addtwo', () => {
  let component: Addtwo;
  let fixture: ComponentFixture<Addtwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addtwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addtwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
