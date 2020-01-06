import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomateSocialHeadingComponent } from './automate-social-heading.component';

describe('AutomateSocialHeadingComponent', () => {
  let component: AutomateSocialHeadingComponent;
  let fixture: ComponentFixture<AutomateSocialHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutomateSocialHeadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomateSocialHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
