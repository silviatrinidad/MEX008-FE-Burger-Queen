import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTableOrdenComponent } from './modal-table-orden.component';

describe('ModalTableOrdenComponent', () => {
  let component: ModalTableOrdenComponent;
  let fixture: ComponentFixture<ModalTableOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTableOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTableOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
