import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivarRiegoPage } from './activar-riego.page';

describe('ActivarRiegoPage', () => {
  let component: ActivarRiegoPage;
  let fixture: ComponentFixture<ActivarRiegoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivarRiegoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivarRiegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
