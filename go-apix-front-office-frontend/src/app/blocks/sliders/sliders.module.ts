import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@app/shared';
import { PrismModule } from '@ngx-prism/core';

import { SliderIconsComponent } from './slider-icons/slider-icons.component';
import { SliderCardProjectsComponent } from './slider-card-projects/slider-card-projects.component';
import { SliderStartRightWayComponent } from './slider-start-right-way/slider-start-right-way.component';
import { SliderBringToLifeComponent } from './slider-bring-to-life/slider-bring-to-life.component';
import { SliderDeveloperToolsComponent } from './slider-developer-tools/slider-developer-tools.component';
import { SliderAllInOneComponent } from './slider-all-in-one/slider-all-in-one.component';
import { SliderTools4SuccessComponent } from './slider-tools4-success/slider-tools4-success.component';
import { SliderLogosComponent } from './slider-logos/slider-logos.component';
import { SliderFeaturesFluidColsComponent } from './slider-features-fluid-cols/slider-features-fluid-cols.component';

@NgModule({
  declarations: [
    SliderIconsComponent,
    SliderCardProjectsComponent,
    SliderStartRightWayComponent,
    SliderBringToLifeComponent,
    SliderDeveloperToolsComponent,
    SliderAllInOneComponent,
    SliderTools4SuccessComponent,
    SliderLogosComponent,
    SliderFeaturesFluidColsComponent
  ],
  imports: [SwiperModule, FontAwesomeModule, SharedModule, PrismModule],
  exports: [
    SliderIconsComponent,
    SliderCardProjectsComponent,
    SliderStartRightWayComponent,
    SliderBringToLifeComponent,
    SliderDeveloperToolsComponent,
    SliderAllInOneComponent,
    SliderTools4SuccessComponent,
    SliderLogosComponent,
    SliderFeaturesFluidColsComponent
  ]
})
export class SlidersModule {}
