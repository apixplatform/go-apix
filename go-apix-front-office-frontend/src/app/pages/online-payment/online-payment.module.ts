import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CtaModule } from '@app/blocks/cta/cta.module';
import { TestimonialsModule } from '@app/blocks/testimonials/testimonials.module';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { UsualModule } from '@app/blocks/usual/usual.module';
import { ActionsModule } from '@app/blocks/actions/actions.module';

import { OnlinePaymentRoutingModule } from './online-payment-routing.module';
import { OnlinePaymentComponent } from './components/online-payment/online-payment.component';
import { OnlinePaymentHeadingComponent } from './components/online-payment-heading/online-payment-heading.component';
import { OnlinePaymentFeaturesComponent } from './components/online-payment-features/online-payment-features.component';
import { OnlinePaymentStepsComponent } from './components/online-payment-steps/online-payment-steps.component';
import { OnlinePaymentCustomersManagementComponent } from './components/online-payment-customers-management/online-payment-customers-management.component';
import { OnlinePaymentRegisterComponent } from './components/online-payment-register/online-payment-register.component';
import { OnlinePaymentSendReceiveComponent } from './components/online-payment-send-receive/online-payment-send-receive.component';

@NgModule({
  declarations: [
    OnlinePaymentComponent,
    OnlinePaymentHeadingComponent,
    OnlinePaymentFeaturesComponent,
    OnlinePaymentStepsComponent,
    OnlinePaymentCustomersManagementComponent,
    OnlinePaymentRegisterComponent,
    OnlinePaymentSendReceiveComponent
  ],
  imports: [
    SharedModule,
    CtaModule,
    TestimonialsModule,
    FootersModule,
    UsualModule,
    ActionsModule,
    OnlinePaymentRoutingModule
  ]
})
export class OnlinePaymentModule {}
