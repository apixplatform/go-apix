import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter4Component } from './counter4.component';

describe('Counter4Component', () => {
  let component: Counter4Component;
  let fixture: ComponentFixture<Counter4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Counter4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Counter4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
