import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderStartRightWayComponent } from './slider-start-right-way.component';

describe('SliderStartRightWayComponent', () => {
  let component: SliderStartRightWayComponent;
  let fixture: ComponentFixture<SliderStartRightWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderStartRightWayComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderStartRightWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
