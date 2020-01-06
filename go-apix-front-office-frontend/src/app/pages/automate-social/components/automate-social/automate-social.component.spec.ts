import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomateSocialComponent } from './automate-social.component';

describe('AutomateSocialComponent', () => {
  let component: AutomateSocialComponent;
  let fixture: ComponentFixture<AutomateSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutomateSocialComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomateSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
