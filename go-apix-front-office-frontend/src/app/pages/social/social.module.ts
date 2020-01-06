import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { ActionsModule } from '@app/blocks/actions/actions.module';
import { CountersModule } from '@app/blocks/counters/counters.module';
import { SlidersModule } from '@app/blocks/sliders/sliders.module';
import { TestimonialsModule } from '@app/blocks/testimonials/testimonials.module';
import { CtaModule } from '@app/blocks/cta/cta.module';
import { UsualModule } from '@app/blocks/usual/usual.module';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { ShellModule } from '@app/shell/shell.module';

import { SocialRoutingModule } from './social-routing.module';
import { SocialComponent } from './components/social/social.component';
import { SocialHeadingComponent } from './components/social-heading/social-heading.component';
import { SocialRegisterComponent } from './components/social-register/social-register.component';
import { SocialServicesComponent } from './components/social-services/social-services.component';

@NgModule({
  declarations: [
    SocialComponent,
    SocialHeadingComponent,
    SocialRegisterComponent,
    SocialServicesComponent
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
    ShellModule,

    SocialRoutingModule
  ]
})
export class SocialModule {}
