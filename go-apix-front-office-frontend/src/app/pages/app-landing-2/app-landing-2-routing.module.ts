import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { AppLanding2Component } from './components/app-landing2/app-landing2.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: '',
    component: AppLanding2Component,
    data: { title: extract('App Landing 2') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AppLanding2RoutingModule {}
