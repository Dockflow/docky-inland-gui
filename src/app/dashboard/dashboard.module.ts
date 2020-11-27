import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from 'src/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCb1tHheb8eZeoA2O2veKYHR_TXO9OLm1o'
    })
  ]
})
export class DashboardModule { }
