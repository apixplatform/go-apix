import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanding2DownloadComponent } from './app-landing2-download.component';

describe('AppLanding2DownloadComponent', () => {
  let component: AppLanding2DownloadComponent;
  let fixture: ComponentFixture<AppLanding2DownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLanding2DownloadComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLanding2DownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
