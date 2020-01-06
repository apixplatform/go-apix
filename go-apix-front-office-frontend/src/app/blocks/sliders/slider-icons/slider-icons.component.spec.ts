import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderIconsComponent } from './slider-icons.component';

describe('SliderIconsComponent', () => {
  let component: SliderIconsComponent;
  let fixture: ComponentFixture<SliderIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderIconsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
