import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { SlidersModule } from '@app/blocks/sliders/sliders.module';
import { CtaModule } from '@app/blocks/cta/cta.module';
import { UsualModule } from '@app/blocks/usual/usual.module';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { ModalsModule } from '@app/blocks/modals/modals.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { StartupRoutingModule } from './startup-routing.module';
import { StartupComponent } from './components/startup/startup.component';
import { StartupHeadingComponent } from './components/startup-heading/startup-heading.component';
import { StartupFeaturesComponent } from './components/startup-features/startup-features.component';
import { StartupWhyDashcoreComponent } from './components/startup-why-dashcore/startup-why-dashcore.component';
import { StartupVideosComponent } from './components/startup-videos/startup-videos.component';
import { BubblesService } from './services/bubbles.service';

@NgModule({
  providers: [BubblesService],
  declarations: [
    StartupComponent,
    StartupHeadingComponent,
    StartupFeaturesComponent,
    StartupWhyDashcoreComponent,
    StartupVideosComponent
  ],
  imports: [
    SharedModule,
    SlidersModule,
    CtaModule,
    UsualModule,
    FootersModule,
    NgbTabsetModule,
    ModalsModule,
    StartupRoutingModule
  ]
})
export class StartupModule {}
