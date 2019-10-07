import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHamburgerSoberbiaComponent } from './modal-hamburger-soberbia.component';

describe('ModalHamburgerSoberbiaComponent', () => {
  let component: ModalHamburgerSoberbiaComponent;
  let fixture: ComponentFixture<ModalHamburgerSoberbiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHamburgerSoberbiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHamburgerSoberbiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
