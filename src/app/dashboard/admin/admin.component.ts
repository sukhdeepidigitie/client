import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(private cookie: CookieService, private router: Router) {
    
  }

  ngOnInit() {

  }

 
  logOut() {
    this.cookie.removeAll();
    this.router.navigate(['../login']);
  }
}
