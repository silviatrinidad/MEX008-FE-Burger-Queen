import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenPayComponent } from './orden-pay.component';

describe('OrdenPayComponent', () => {
  let component: OrdenPayComponent;
  let fixture: ComponentFixture<OrdenPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
