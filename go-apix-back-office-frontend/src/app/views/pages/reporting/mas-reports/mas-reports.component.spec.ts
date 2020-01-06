import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasReportsComponent } from './mas-reports.component';

describe('MasReportsComponent', () => {
  let component: MasReportsComponent;
  let fixture: ComponentFixture<MasReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
