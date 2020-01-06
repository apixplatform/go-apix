import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter3Component } from './counter3.component';

describe('Counter3Component', () => {
  let component: Counter3Component;
  let fixture: ComponentFixture<Counter3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Counter3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Counter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
