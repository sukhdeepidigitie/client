import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { GuestComponent } from './guest/guest.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewClientComponent } from './new-client/new-client.component';
import { OnetimeVisitComponent } from './onetime-visit/onetime-visit.component';
import {GuestClientComponent} from './guest-client/guest-client.component';
export const dashboardRoutes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            { path: 'newproject', component: NewProjectComponent },
            { path: 'newclient', component: NewClientComponent },
            { path: 'onetime-visit', component: OnetimeVisitComponent },
            { path: 'guestclient', component: GuestClientComponent },
        ]
    },



];

export const dashboardrouter: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
