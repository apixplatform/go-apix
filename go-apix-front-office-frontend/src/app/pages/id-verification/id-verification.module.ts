import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdVerificationComponent } from './components/id-verification/id-verification.component';

import { IdVerificationRoutingModule } from './id-verification-routing.module';

@NgModule({
  declarations: [IdVerificationComponent],
  imports: [CommonModule, IdVerificationRoutingModule]
})
export class IdVerificationModule {}
