import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter6Component } from './counter6.component';

describe('Counter6Component', () => {
  let component: Counter6Component;
  let fixture: ComponentFixture<Counter6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Counter6Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Counter6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
