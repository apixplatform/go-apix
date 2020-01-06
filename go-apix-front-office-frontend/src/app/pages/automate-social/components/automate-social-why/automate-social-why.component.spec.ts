import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomateSocialWhyComponent } from './automate-social-why.component';

describe('AutomateSocialWhyComponent', () => {
  let component: AutomateSocialWhyComponent;
  let fixture: ComponentFixture<AutomateSocialWhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutomateSocialWhyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomateSocialWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
