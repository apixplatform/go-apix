import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCardProjectsComponent } from './slider-card-projects.component';

describe('SliderCardProjectsComponent', () => {
  let component: SliderCardProjectsComponent;
  let fixture: ComponentFixture<SliderCardProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderCardProjectsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCardProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
