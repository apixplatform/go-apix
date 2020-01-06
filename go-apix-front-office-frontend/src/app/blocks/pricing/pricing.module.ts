import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { PricingCardsComponent } from './pricing-cards/pricing-cards.component';
import { PricingTwoCardsComponent } from './pricing-two-cards/pricing-two-cards.component';

@NgModule({
  declarations: [PricingCardsComponent, PricingTwoCardsComponent],
  imports: [SharedModule],
  exports: [PricingCardsComponent, PricingTwoCardsComponent]
})
export class PricingModule {}
