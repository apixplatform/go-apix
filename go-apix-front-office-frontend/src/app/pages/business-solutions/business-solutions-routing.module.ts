import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { BusinessSolutionsComponent } from './components/business-solutions/business-solutions.component';
import { Shell } from '@app/shell/services/shell.service';

const routes: Routes = [
  {
    path: '',
    component: BusinessSolutionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessSolutionsRoutingModule {}
