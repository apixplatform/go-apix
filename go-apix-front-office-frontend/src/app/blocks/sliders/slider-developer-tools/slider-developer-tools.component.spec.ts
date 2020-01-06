import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDeveloperToolsComponent } from './slider-developer-tools.component';

describe('SliderDeveloperToolsComponent', () => {
  let component: SliderDeveloperToolsComponent;
  let fixture: ComponentFixture<SliderDeveloperToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderDeveloperToolsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderDeveloperToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
