import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLandingDownloadComponent } from './app-landing-download.component';

describe('AppLandingDownloadComponent', () => {
  let component: AppLandingDownloadComponent;
  let fixture: ComponentFixture<AppLandingDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLandingDownloadComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLandingDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
