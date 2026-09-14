import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hamburguer } from './hamburguer';

describe('Hamburguer', () => {
  let component: Hamburguer;
  let fixture: ComponentFixture<Hamburguer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hamburguer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hamburguer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
