import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { FaqsModule as FaqsBlockModule } from '@app/blocks/faqs/faqs.module';
import { CtaModule } from '@app/blocks/cta/cta.module';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './components/faqs/faqs.component';
import { FaqsQuestionsComponent } from './components/faqs-questions/faqs-questions.component';
import { FaqsOtherChannelsComponent } from './components/faqs-other-channels/faqs-other-channels.component';
import { FaqsSidebarComponent } from './components/faqs-sidebar/faqs-sidebar.component';

@NgModule({
  declarations: [
    FaqsComponent,
    FaqsQuestionsComponent,
    FaqsOtherChannelsComponent,
    FaqsSidebarComponent
  ],
  imports: [
    SharedModule,
    FootersModule,
    FaqsBlockModule,
    CtaModule,
    FaqsRoutingModule
  ]
})
export class FaqsModule {}
