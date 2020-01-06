import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerCurveComponent } from './divider-curve.component';

describe('DividerCurveComponent', () => {
  let component: DividerCurveComponent;
  let fixture: ComponentFixture<DividerCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DividerCurveComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
