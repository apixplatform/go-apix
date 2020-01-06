import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Faqs1Component } from './faqs1.component';

describe('Faqs1Component', () => {
  let component: Faqs1Component;
  let fixture: ComponentFixture<Faqs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Faqs1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Faqs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
