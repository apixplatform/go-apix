import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { SlidersModule } from '@app/blocks/sliders/sliders.module';
import { TestimonialsModule } from '@app/blocks/testimonials/testimonials.module';
import { FaqsModule } from '@app/blocks/faqs/faqs.module';
import { UsualModule } from '@app/blocks/usual/usual.module';
import { CtaModule } from '@app/blocks/cta/cta.module';
import { FootersModule } from '@app/blocks/footers/footers.module';

import { SaasRoutingModule } from './saas-routing.module';
import { SaasComponent } from './components/saas/saas.component';
import { SaasHeadingComponent } from './components/saas-heading/saas-heading.component';
import { SaasPerspectiveMockupsComponent } from './components/saas-perspective-mockups/saas-perspective-mockups.component';
import { SaasLightweightTemplateComponent } from './components/saas-lightweight-template/saas-lightweight-template.component';

@NgModule({
  declarations: [
    SaasComponent,
    SaasHeadingComponent,
    SaasPerspectiveMockupsComponent,
    SaasLightweightTemplateComponent
  ],
  imports: [
    SharedModule,
    SlidersModule,
    TestimonialsModule,
    FaqsModule,
    UsualModule,
    CtaModule,
    FootersModule,
    SaasRoutingModule
  ]
})
export class SaasModule {}
