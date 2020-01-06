import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ScreenshotsAppComponent } from './screenshots-app/screenshots-app.component';

@NgModule({
  declarations: [ScreenshotsAppComponent],
  imports: [SwiperModule],
  exports: [ScreenshotsAppComponent]
})
export class ScreenshotsModule {}
