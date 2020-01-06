import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './components/shell/shell.component';
import { NavbarDefaultComponent } from './components/navbar/navbar-default/navbar-default.component';
import { NavbarShellComponent } from './components/navbar/navbar-shell/navbar-shell.component';

@NgModule({
  imports: [SharedModule, NgbModule, TranslateModule, RouterModule],
  declarations: [ShellComponent, NavbarDefaultComponent, NavbarShellComponent],
  exports: [NavbarDefaultComponent]
})
export class ShellModule {}
