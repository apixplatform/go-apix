import { NgModule } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SharedModule } from '@app/shared';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';
import { HomeHeadingComponent } from './components/home-heading/home-heading.component';
import { HomeFeaturesComponent } from './components/home-features/home-features.component';
import { HomeSelectionComponent } from './components/home-selection/home-selection.component';
import { HomePurchaseComponent } from './components/home-purchase/home-purchase.component';
import { HomeDemoComponent } from './components/home-demo/home-demo.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';

@NgModule({
  imports: [
    SharedModule,
    SimplebarAngularModule,
    ScrollToModule.forRoot(),
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeHeadingComponent,
    HomeFeaturesComponent,
    HomeSelectionComponent,
    HomePurchaseComponent,
    HomeDemoComponent,
    HomeFooterComponent
  ]
})
export class HomeModule {}
