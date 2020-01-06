import { NgModule } from '@angular/core';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { ShellModule } from '@app/shell/shell.module';

import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './components/terms/terms.component';
import { TermsTermsComponent } from './components/terms-terms/terms-terms.component';

@NgModule({
  declarations: [TermsComponent, TermsTermsComponent],
  imports: [FootersModule, ShellModule, TermsRoutingModule]
})
export class TermsModule {}
