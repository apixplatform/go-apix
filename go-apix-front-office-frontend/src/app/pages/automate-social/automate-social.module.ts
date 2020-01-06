import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { ActionsModule } from '@app/blocks/actions/actions.module';
import { CountersModule } from '@app/blocks/counters/counters.module';
import { SlidersModule } from '@app/blocks/sliders/sliders.module';
import { TestimonialsModule } from '@app/blocks/testimonials/testimonials.module';
import { CtaModule } from '@app/blocks/cta/cta.module';
import { UsualModule } from '@app/blocks/usual/usual.module';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { ModalsModule } from '@app/blocks/modals/modals.module';

import { AutomateSocialRoutingModule } from './automate-social-routing.module';
import { AutomateSocialComponent } from './components/automate-social/automate-social.component';
import { AutomateSocialHeadingComponent } from './components/automate-social-heading/automate-social-heading.component';
import { AutomateSocialGetStartedComponent } from './components/automate-social-get-started/automate-social-get-started.component';
import { AutomateSocialWhyComponent } from './components/automate-social-why/automate-social-why.component';
import { AutomateSocialAutomationSolutionComponent } from './components/automate-social-automation-solution/automate-social-automation-solution.component';

@NgModule({
  declarations: [
    AutomateSocialComponent,
    AutomateSocialHeadingComponent,
    AutomateSocialGetStartedComponent,
    AutomateSocialWhyComponent,
    AutomateSocialAutomationSolutionComponent
  ],
  imports: [
    SharedModule,
    ActionsModule,
    CountersModule,
    SlidersModule,
    TestimonialsModule,
    CtaModule,
    UsualModule,
    FootersModule,
    ModalsModule,

    AutomateSocialRoutingModule
  ]
})
export class AutomateSocialModule {}
