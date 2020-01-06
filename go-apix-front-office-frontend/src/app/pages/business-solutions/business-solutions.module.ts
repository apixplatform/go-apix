import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { BlocksModule } from '@app/blocks/blocks.module';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { TestimonialsModule } from '@app/blocks/testimonials/testimonials.module';
import { SlidersModule } from '@app/blocks/sliders/sliders.module';
import { PricingModule } from '@app/blocks/pricing/pricing.module';
import { DividersModule } from '@app/blocks/dividers/dividers.module';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { BusinessSolutionsRoutingModule } from './business-solutions-routing.module';
import { BusinessSolutionsComponent } from './components/business-solutions/business-solutions.component';
import { BusinessSolutionsHeadingComponent } from './components/business-solutions-heading/business-solutions-heading.component';
import { BusinessSolutionsIntegrationIconsComponent } from './components/business-solutions-integration-icons/business-solutions-integration-icons.component';
import { BusinessSolutionsStartBusinessComponent } from './components/business-solutions-start-business/business-solutions-start-business.component';
import { BusinessSolutionsPricingIncludesComponent } from './components/business-solutions-pricing-includes/business-solutions-pricing-includes.component';
import { BusinessSolutionsGetThemeComponent } from './components/business-solutions-get-theme/business-solutions-get-theme.component';

@NgModule({
  declarations: [
    BusinessSolutionsComponent,
    BusinessSolutionsHeadingComponent,
    BusinessSolutionsIntegrationIconsComponent,
    BusinessSolutionsStartBusinessComponent,
    BusinessSolutionsPricingIncludesComponent,
    BusinessSolutionsGetThemeComponent
  ],
  imports: [
    SharedModule,
    BlocksModule,
    FootersModule,
    PricingModule,
    TestimonialsModule,
    SlidersModule,
    DividersModule,
    NgxTypedJsModule,
    BusinessSolutionsRoutingModule
  ]
})
export class BusinessSolutionsModule {}
