import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cta1Component } from './cta1/cta1.component';

@NgModule({
  declarations: [Cta1Component],
  imports: [RouterModule],
  exports: [Cta1Component]
})
export class CtaModule {}
