import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { ActionsModule } from '@app/blocks/actions/actions.module';
import { TestimonialsModule } from '@app/blocks/testimonials/testimonials.module';
import { FaqsModule } from '@app/blocks/faqs/faqs.module';
import { SlidersModule } from '@app/blocks/sliders/sliders.module';
import { UsualModule } from '@app/blocks/usual/usual.module';

import { CorporateRoutingModule } from './corporate-routing.module';
import { CorporateComponent } from './components/corporate/corporate.component';
import { CorporateHeadingComponent } from './components/corporate-heading/corporate-heading.component';
import { CorporateDoBusinessComponent } from './components/corporate-do-business/corporate-do-business.component';

@NgModule({
  declarations: [
    CorporateComponent,
    CorporateHeadingComponent,
    CorporateDoBusinessComponent
  ],
  imports: [
    SharedModule,
    FootersModule,
    ActionsModule,
    TestimonialsModule,
    FaqsModule,
    SlidersModule,
    UsualModule,
    CorporateRoutingModule
  ]
})
export class CorporateModule {}
