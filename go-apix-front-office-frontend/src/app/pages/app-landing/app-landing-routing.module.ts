import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { AppLandingComponent } from './components/app-landing/app-landing.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: '',
    component: AppLandingComponent,
    data: { title: extract('App Landing') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AppLandingRoutingModule {}
