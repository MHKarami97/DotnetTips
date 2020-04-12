import {
  NbCardModule, NbIconModule, NbInputModule, NbUserModule, NbButtonModule, NbTabsetModule, NbSelectModule,
  NbProgressBarModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbAccordionModule,
  NbPopoverModule,
  NbTableModule,
  NbToastrModule,
} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { OthersRoutingModule, routedComponents } from './others-routing.module';

@NgModule({
  imports: [
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    OthersRoutingModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbAccordionModule,
    NbPopoverModule,
    NbTableModule,
    NbToastrModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class OthersModule { }
