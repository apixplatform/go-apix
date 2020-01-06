import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CountersModule } from '@app/blocks/counters/counters.module';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { SlidersModule } from '@app/blocks/sliders/sliders.module';
import { UsualModule } from '@app/blocks/usual/usual.module';
import { CtaModule } from '@app/blocks/cta/cta.module';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { DevelopersRoutingModule } from './developers-routing.module';
import { DevelopersComponent } from './components/developers/developers.component';
import { DevelopersHeadingComponent } from './components/developers-heading/developers-heading.component';
import { DevelopersIntegrationComponent } from './components/developers-integration/developers-integration.component';
import { DevelopersIntegrationToolsComponent } from './components/developers-integration-tools/developers-integration-tools.component';

@NgModule({
  declarations: [
    DevelopersComponent,
    DevelopersHeadingComponent,
    DevelopersIntegrationComponent,
    DevelopersIntegrationToolsComponent
  ],
  imports: [
    SharedModule,
    CountersModule,
    FootersModule,
    SlidersModule,
    UsualModule,
    CtaModule,
    NgxTypedJsModule,
    DevelopersRoutingModule
  ]
})
export class DevelopersModule {}
