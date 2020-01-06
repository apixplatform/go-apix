import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFeaturesFluidColsComponent } from './slider-features-fluid-cols.component';

describe('SliderFeaturesFluidColsComponent', () => {
  let component: SliderFeaturesFluidColsComponent;
  let fixture: ComponentFixture<SliderFeaturesFluidColsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderFeaturesFluidColsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderFeaturesFluidColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
