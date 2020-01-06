import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CountersModule } from '@app/blocks/counters/counters.module';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { UsualModule } from '@app/blocks/usual/usual.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ActionsModule } from '@app/blocks/actions/actions.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components/about/about.component';
import { AboutOverviewComponent } from './components/about-overview/about-overview.component';
import { AboutVideoComponent } from './components/about-video/about-video.component';
import { AboutSolutionsComponent } from './components/about-solutions/about-solutions.component';
import { AboutFeaturesComponent } from './components/about-features/about-features.component';
import { AboutCustomersComponent } from './components/about-customers/about-customers.component';
import { AboutTeamComponent } from './components/about-team/about-team.component';
import { AboutRegisterComponent } from './components/about-register/about-register.component';

@NgModule({
  imports: [
    SharedModule,
    CountersModule,
    FootersModule,
    UsualModule,
    ActionsModule,
    SwiperModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutComponent,
    AboutOverviewComponent,
    AboutVideoComponent,
    AboutSolutionsComponent,
    AboutFeaturesComponent,
    AboutCustomersComponent,
    AboutTeamComponent,
    AboutRegisterComponent
  ]
})
export class AboutModule {}
