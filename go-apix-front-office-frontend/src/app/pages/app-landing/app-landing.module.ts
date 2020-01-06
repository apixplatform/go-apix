import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CountersModule } from '@app/blocks/counters/counters.module';
import { SlidersModule } from '@app/blocks/sliders/sliders.module';
import { TestimonialsModule } from '@app/blocks/testimonials/testimonials.module';
import { ScreenshotsModule } from '@app/blocks/screenshots/screenshots.module';
import { FootersModule } from '@app/blocks/footers/footers.module';

import { AppLandingRoutingModule } from './app-landing-routing.module';
import { AppLandingComponent } from './components/app-landing/app-landing.component';
import { AppLandingFeatureCardsComponent } from './components/app-landing-feature-cards/app-landing-feature-cards.component';
import { AppLandingTwinPhoneRightListComponent } from './components/app-landing-twin-phone-right-list/app-landing-twin-phone-right-list.component';
import { AppLandingTwinPhoneLeftListComponent } from './components/app-landing-twin-phone-left-list/app-landing-twin-phone-left-list.component';
import { AppLandingDownloadComponent } from './components/app-landing-download/app-landing-download.component';
import { AppLandingHeadingComponent } from './components/app-landing-heading/app-landing-heading.component';

@NgModule({
  declarations: [
    AppLandingComponent,
    AppLandingFeatureCardsComponent,
    AppLandingTwinPhoneRightListComponent,
    AppLandingTwinPhoneLeftListComponent,
    AppLandingDownloadComponent,
    AppLandingHeadingComponent
  ],
  imports: [
    SharedModule,
    FootersModule,
    CountersModule,
    SlidersModule,
    TestimonialsModule,
    ScreenshotsModule,
    AppLandingRoutingModule
  ]
})
export class AppLandingModule {}
