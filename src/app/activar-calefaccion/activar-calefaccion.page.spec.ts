import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivarCalefaccionPage } from './activar-calefaccion.page';

describe('ActivarCalefaccionPage', () => {
  let component: ActivarCalefaccionPage;
  let fixture: ComponentFixture<ActivarCalefaccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivarCalefaccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivarCalefaccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
