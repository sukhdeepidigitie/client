import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalClass} from './global.access';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
imports:[CommonModule,ReactiveFormsModule],
declarations:[],
providers:[GlobalClass,CookieService]
})

export class SharedModule{

}