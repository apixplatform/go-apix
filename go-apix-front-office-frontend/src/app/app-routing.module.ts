import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  NoPreloading
} from '@angular/router';
import { Shell } from '@app/shell/services/shell.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren:
      './pages/business-solutions/business-solutions.module#BusinessSolutionsModule'
  },
  {
    path: 'account-opening',
    loadChildren:
      './pages/account-opening/account-opening.module#AccountOpeningModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'disabled',
      preloadingStrategy: NoPreloading
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
