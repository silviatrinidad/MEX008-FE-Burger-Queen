import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStatusOrdenComponent } from './dialog-status-orden.component';

describe('DialogStatusOrdenComponent', () => {
  let component: DialogStatusOrdenComponent;
  let fixture: ComponentFixture<DialogStatusOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogStatusOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStatusOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
