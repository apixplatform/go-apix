import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { AccountOpeningComponent } from './components/account-opening/account-opening.component';
import { ValidateIdComponent } from './components/validate-id/validate-id.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: '',
    component: AccountOpeningComponent,
    data: { title: 'Account Opening' }
  },
  {
    path: 'validate-id',
    component: ValidateIdComponent,
    data: { title: 'Validate ID' }
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
    data: { title: 'Create Account' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccountOpeningRoutingModule {}
