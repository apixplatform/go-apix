import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { AutomateSocialComponent } from './components/automate-social/automate-social.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: '',
    component: AutomateSocialComponent,
    data: { title: extract('DashCore - Automate Social Demo') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomateSocialRoutingModule {}
