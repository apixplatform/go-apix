import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CountUpModule } from 'countup.js-angular2';

import { Counter1Component } from './counter1/counter1.component';
import { Counter2Component } from './counter2/counter2.component';
import { Counter3Component } from './counter3/counter3.component';
import { Counter4Component } from './counter4/counter4.component';
import { Counter5Component } from './counter5/counter5.component';
import { Counter6Component } from './counter6/counter6.component';

@NgModule({
  declarations: [
    Counter1Component,
    Counter2Component,
    Counter3Component,
    Counter4Component,
    Counter5Component,
    Counter6Component
  ],
  imports: [SharedModule, CountUpModule],
  exports: [
    Counter1Component,
    Counter2Component,
    Counter3Component,
    Counter4Component,
    Counter5Component,
    Counter6Component
  ]
})
export class CountersModule {}
