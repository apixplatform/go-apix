import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { CountersModule } from '@app/blocks/counters/counters.module';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { UsualModule } from '@app/blocks/usual/usual.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ActionsModule } from '@app/blocks/actions/actions.module';

import { AccountOpeningComponent } from './components/account-opening/account-opening.component';
import { AccountOpeningRoutingModule } from './account-opening-routing.module';
import { ValidateIdComponent } from './components/validate-id/validate-id.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccountOpeningComponent,
    ValidateIdComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CountersModule,
    FootersModule,
    UsualModule,
    ActionsModule,
    SwiperModule,
    FormsModule,
    AccountOpeningRoutingModule
  ]
})
export class AccountOpeningModule {}
