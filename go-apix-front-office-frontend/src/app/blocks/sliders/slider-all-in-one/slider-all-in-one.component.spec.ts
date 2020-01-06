import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAllInOneComponent } from './slider-all-in-one.component';

describe('SliderAllInOneComponent', () => {
  let component: SliderAllInOneComponent;
  let fixture: ComponentFixture<SliderAllInOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderAllInOneComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderAllInOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
