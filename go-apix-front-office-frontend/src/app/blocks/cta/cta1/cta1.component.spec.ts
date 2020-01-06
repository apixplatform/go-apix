import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cta1Component } from './cta1.component';

describe('Cta1Component', () => {
  let component: Cta1Component;
  let fixture: ComponentFixture<Cta1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Cta1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
