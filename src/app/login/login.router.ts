import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {LoginComponent} from "./login/login.component";

export const loginRoutes: Routes = [
{path:'',component:LoginComponent}
];

export const loginrouter:ModuleWithProviders=RouterModule.forChild(loginRoutes);
