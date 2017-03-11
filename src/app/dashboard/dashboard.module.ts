import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {dashboardrouter} from './dashboard.router';
import {DashboardComponent} from './dashboard.component';
import {SharedModule} from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import { GuestComponent } from './guest/guest.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewClientComponent } from './new-client/new-client.component';
import { OnetimeVisitComponent } from './onetime-visit/onetime-visit.component';
import { GuestClientComponent } from './guest-client/guest-client.component';
@NgModule({
  imports: [
    CommonModule,
    dashboardrouter,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    AdminComponent,
    AdminComponent,
    GuestComponent,
    NewProjectComponent,
    NewClientComponent,
    OnetimeVisitComponent,
    GuestClientComponent, 
  ]
})
export class DashboardModule { }
