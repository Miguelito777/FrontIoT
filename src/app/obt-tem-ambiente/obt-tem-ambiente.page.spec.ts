import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtTemAmbientePage } from './obt-tem-ambiente.page';

describe('ObtTemAmbientePage', () => {
  let component: ObtTemAmbientePage;
  let fixture: ComponentFixture<ObtTemAmbientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtTemAmbientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtTemAmbientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
