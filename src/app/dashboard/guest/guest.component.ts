import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  constructor(private cookie:CookieService,private router:Router) { }

  ngOnInit() {
  }
  logOut(){
    this.cookie.removeAll();
    this.router.navigate(['../login']);

  }
}
