import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  
];

export const approuter:ModuleWithProviders=RouterModule.forRoot(appRoutes);