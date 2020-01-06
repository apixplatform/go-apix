import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { PricingModule as PricingBlocksModule } from '@app/blocks/pricing/pricing.module';
import { FaqsModule } from '@app/blocks/faqs/faqs.module';
import { UsualModule } from '@app/blocks/usual/usual.module';
import { CtaModule } from '@app/blocks/cta/cta.module';
import { FootersModule } from '@app/blocks/footers/footers.module';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './components/pricing/pricing.component';
import { PricingIncludeComponent } from './components/pricing-include/pricing-include.component';

@NgModule({
  declarations: [PricingComponent, PricingIncludeComponent],
  imports: [
    SharedModule,
    FootersModule,
    CtaModule,
    UsualModule,
    FaqsModule,
    PricingBlocksModule,
    PricingRoutingModule
  ]
})
export class PricingModule {}
