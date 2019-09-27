import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateOrdenComponent } from './state-orden.component';

describe('StateOrdenComponent', () => {
  let component: StateOrdenComponent;
  let fixture: ComponentFixture<StateOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
