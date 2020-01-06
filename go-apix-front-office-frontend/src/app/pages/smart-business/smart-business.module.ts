import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { ActionsModule } from '@app/blocks/actions/actions.module';
import { CountersModule } from '@app/blocks/counters/counters.module';
import { SlidersModule } from '@app/blocks/sliders/sliders.module';
import { TestimonialsModule } from '@app/blocks/testimonials/testimonials.module';
import { CtaModule } from '@app/blocks/cta/cta.module';
import { UsualModule } from '@app/blocks/usual/usual.module';
import { FaqsModule } from '@app/blocks/faqs/faqs.module';
import { FootersModule } from '@app/blocks/footers/footers.module';

import { SmartBusinessRoutingModule } from './smart-business-routing.module';
import { SmartBusinessComponent } from './components/smart-business/smart-business.component';
import { SmartBusinessHeadingComponent } from './components/smart-business-heading/smart-business-heading.component';
import { SmartBusinessWhyDashcoreComponent } from './components/smart-business-why-dashcore/smart-business-why-dashcore.component';
import { SmartBusinessDeserveBetterComponent } from './components/smart-business-deserve-better/smart-business-deserve-better.component';
import { ShellModule } from '@app/shell/shell.module';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SmartBusinessComponent,
    SmartBusinessHeadingComponent,
    SmartBusinessWhyDashcoreComponent,
    SmartBusinessDeserveBetterComponent
  ],
  imports: [
    SharedModule,
    ActionsModule,
    CountersModule,
    SlidersModule,
    TestimonialsModule,
    CtaModule,
    FaqsModule,
    UsualModule,
    FootersModule,
    ShellModule,
    NgbProgressbarModule,

    SmartBusinessRoutingModule
  ]
})
export class SmartBusinessModule {}
