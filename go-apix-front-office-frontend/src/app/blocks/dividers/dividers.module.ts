import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerCurveComponent } from './divider-curve/divider-curve.component';

@NgModule({
  declarations: [DividerCurveComponent],
  imports: [CommonModule],
  exports: [DividerCurveComponent]
})
export class DividersModule {}
