import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogBillComponent } from './modal-dialog-bill.component';

describe('ModalDialogBillComponent', () => {
  let component: ModalDialogBillComponent;
  let fixture: ComponentFixture<ModalDialogBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDialogBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDialogBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
