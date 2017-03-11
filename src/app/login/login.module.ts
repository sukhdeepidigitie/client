import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {loginrouter} from './login.router';
import { LoginComponent } from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    loginrouter,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
