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
  NbTreeGridModule,
  NbSpinnerModule,
  NbTooltipModule,
} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { OthersRoutingModule, routedComponents } from './others-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

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
    NbTreeGridModule,
    NbSpinnerModule,
    Ng2SmartTableModule,
    NbTooltipModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class OthersModule { }
