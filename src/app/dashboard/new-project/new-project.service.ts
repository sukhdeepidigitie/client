import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class NewProjectService{
    
    submitData(formdata:any){
        console.log(formdata);
    }
} 