import { Component, OnInit } from '@angular/core';
import { GlobalClass } from '../../shared/global.access';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, CookieService]
})
export class LoginComponent implements OnInit {
  credit = false;
  submitted = false;
  response: any;
  loginData: {
    email: string,
    password: string
  }
  loginForm: FormGroup;
  constructor(private global: GlobalClass, private fb: FormBuilder,
    private service: LoginService, private cookie: CookieService,
    private router: Router) {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginForm.valueChanges.subscribe(data => this.formUpdated(data));
  }

  ngOnInit() {
  }

  formUpdated(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    console.log(form);
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      // console.log(control);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    this.loginData = this.loginForm.value;
    console.log(this.loginData);
    this.service.login(this.loginData).subscribe(x => {
      this.response = x;
      if (this.response.status === "success") {
        console.log(this.response);
        this.cookie.put("id", this.response.data._id);
        console.log(this.cookie.get("id"));
        this.router.navigate(['../dashboard']);
      }
      else if (this.response.status === "fail") {
        this.credit = true;
        setTimeout(() => {
          this.credit = false;
          this.loginForm.reset();
        }, 2000);
      }
    });
  }
  formErrors = {
     email:'',
     password:''
  };
   validationMessages = {
    'email': {
      'required': 'Email is required.',
    },
    'password': {
      'required': 'Password is required.'
    }
  };
}
