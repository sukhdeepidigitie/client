import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalClass } from '../shared/global.access';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class DashboardService {
    constructor(private http: Http, private global: GlobalClass) {

    }
    onCheck(id: string) {
        let url = this.global.address + "/doCheckLogin";
        console.log(url);
        let data={"id":id}
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url,data,options).map(res => res.json());
    }
}