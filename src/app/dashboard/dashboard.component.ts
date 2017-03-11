import { Component, OnInit } from '@angular/core';
import {DashboardService} from './dashboard.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {Router} from '@angular/router';
@Component({
  moduleId:module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DashboardService]
})
export class DashboardComponent implements OnInit {
  admin=false;
  guest=false;
  constructor(private ser:DashboardService,private cookie:CookieService,
  private router:Router) {
   }

  ngOnInit() {

    if(this.cookie.get("id")){
      let id=this.cookie.get("id");
      this.ser.onCheck(id).subscribe(x=>{
        if(x.data.access==="admin"){
          this.admin=true;
          console.log("admin")
        }
        else if(x.data.access==="guest"){
          this.guest=true;
          console.log("guest");
        }
        else{
          this.cookie.removeAll();
          this.router.navigate(['../login']);
        }
      })
    }
  }

}
