import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialHeadingComponent } from './social-heading.component';

describe('SocialHeadingComponent', () => {
  let component: SocialHeadingComponent;
  let fixture: ComponentFixture<SocialHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialHeadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
