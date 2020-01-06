import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBringToLifeComponent } from './slider-bring-to-life.component';

describe('SliderBringToLifeComponent', () => {
  let component: SliderBringToLifeComponent;
  let fixture: ComponentFixture<SliderBringToLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderBringToLifeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBringToLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
