import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CtaModule } from '@app/blocks/cta/cta.module';
import { SlidersModule } from '@app/blocks/sliders/sliders.module';
import { TestimonialsModule } from '@app/blocks/testimonials/testimonials.module';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { UsualModule } from '@app/blocks/usual/usual.module';
import { ActionsModule } from '@app/blocks/actions/actions.module';

import { IntegrationRoutingModule } from './integration-routing.module';
import { IntegrationComponent } from './components/integration/integration.component';
import { IntegrationHeadingComponent } from './components/integration-heading/integration-heading.component';
import { IntegrationBubblesComponent } from './components/integration-bubbles/integration-bubbles.component';
import { BubbleComponent } from './components/bubble/bubble.component';
import { ShellModule } from '@app/shell/shell.module';
import { IntegrationHowItWorksComponent } from './components/integration-how-it-works/integration-how-it-works.component';
import { IntegrationBuiltTechComponent } from './components/integration-built-tech/integration-built-tech.component';
import { IntegrationExtendCoreComponent } from './components/integration-extend-core/integration-extend-core.component';
import { IntegrationLatestProjectsComponent } from './components/integration-latest-projects/integration-latest-projects.component';
import { IntegrationRegisterComponent } from './components/integration-register/integration-register.component';
import { IntegrationWhyChooseUsComponent } from './components/integration-why-choose-us/integration-why-choose-us.component';

@NgModule({
  declarations: [
    IntegrationComponent,
    IntegrationHeadingComponent,
    IntegrationBubblesComponent,
    BubbleComponent,
    IntegrationHowItWorksComponent,
    IntegrationBuiltTechComponent,
    IntegrationExtendCoreComponent,
    IntegrationLatestProjectsComponent,
    IntegrationRegisterComponent,
    IntegrationWhyChooseUsComponent
  ],
  imports: [
    SharedModule,
    CtaModule,
    SlidersModule,
    TestimonialsModule,
    FootersModule,
    UsualModule,
    ActionsModule,
    ShellModule,
    IntegrationRoutingModule
  ]
})
export class IntegrationModule {}
