import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbAccordionModule,
  NbPopoverModule,
  NbTableModule,
  NbToastrModule,
} from '@nebular/theme';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeModule } from '../../@theme/theme.module';
import { MainDashboardComponent } from './main-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbAccordionModule,
    NbPopoverModule,
    NbTableModule,
    NbToastrModule,
  ],
  declarations: [
    MainDashboardComponent,
    TabsComponent,
    ListComponent,
  ],
  providers: [
  ],
})
export class MainDashboardModule {

}
