import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hamburguer } from './hamburguer';
import { Router } from '@angular/router';

describe('Hamburguer', () => {
  let component: Hamburguer;
  let fixture: ComponentFixture<Hamburguer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hamburguer, Router]
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
