import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CountersModule } from '@app/blocks/counters/counters.module';
import { SlidersModule } from '@app/blocks/sliders/sliders.module';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { FaqsModule } from '@app/blocks/faqs/faqs.module';
import { CtaModule } from '@app/blocks/cta/cta.module';
import { ShellModule } from '@app/shell/shell.module';

import { AppLanding2RoutingModule } from './app-landing-2-routing.module';
import { AppLanding2Component } from './components/app-landing2/app-landing2.component';
import { AppLanding2HeadingComponent } from './components/app-landing2-heading/app-landing2-heading.component';
import { AppLanding2TrendingDesignComponent } from './components/app-landing2-trending-design/app-landing2-trending-design.component';
import { AppLanding2FocusOnSuccessComponent } from './components/app-landing2-focus-on-success/app-landing2-focus-on-success.component';
import { AppLanding2SafetyComponent } from './components/app-landing2-safety/app-landing2-safety.component';
import { AppLanding2FeaturesComponent } from './components/app-landing2-features/app-landing2-features.component';
import { AppLanding2PoppingHighlightComponent } from './components/app-landing2-popping-highlight/app-landing2-popping-highlight.component';
import { AppLanding2DownloadComponent } from './components/app-landing2-download/app-landing2-download.component';

@NgModule({
  declarations: [
    AppLanding2Component,
    AppLanding2HeadingComponent,
    AppLanding2TrendingDesignComponent,
    AppLanding2FocusOnSuccessComponent,
    AppLanding2SafetyComponent,
    AppLanding2FeaturesComponent,
    AppLanding2PoppingHighlightComponent,
    AppLanding2DownloadComponent
  ],
  imports: [
    SharedModule,
    CountersModule,
    FootersModule,
    SlidersModule,
    FaqsModule,
    CtaModule,
    ShellModule,
    AppLanding2RoutingModule
  ]
})
export class AppLanding2Module {}
