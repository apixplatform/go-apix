import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupHeadingComponent } from './startup-heading.component';

describe('StartupHeadingComponent', () => {
  let component: StartupHeadingComponent;
  let fixture: ComponentFixture<StartupHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StartupHeadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
