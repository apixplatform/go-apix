import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { RouterModule } from '@angular/router';

import { TrustUsComponent } from './trust-us/trust-us.component';
import { DeveloperDesignerComponent } from './developer-designer/developer-designer.component';
import { FeaturesIconsColComponent } from './features-icons-col/features-icons-col.component';
import { BigScreenComponent } from './big-screen/big-screen.component';
import { StartNowBoxComponent } from './start-now-box/start-now-box.component';
import { IntegrationFloatingIconsComponent } from './integration-floating-icons/integration-floating-icons.component';

@NgModule({
  declarations: [
    TrustUsComponent,
    DeveloperDesignerComponent,
    FeaturesIconsColComponent,
    BigScreenComponent,
    StartNowBoxComponent,
    IntegrationFloatingIconsComponent
  ],
  imports: [SharedModule, RouterModule],
  exports: [
    TrustUsComponent,
    DeveloperDesignerComponent,
    FeaturesIconsColComponent,
    BigScreenComponent,
    StartNowBoxComponent,
    IntegrationFloatingIconsComponent
  ]
})
export class UsualModule {}
