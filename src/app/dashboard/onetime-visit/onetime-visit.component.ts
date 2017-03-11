import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {OneTimeVisitService} from './onetime-visit.service';
@Component({
  selector: 'app-onetime-visit',
  templateUrl: './onetime-visit.component.html',
  styleUrls: ['./onetime-visit.component.css'],
  providers:[OneTimeVisitService]
})
export class OnetimeVisitComponent implements OnInit {
  oneTimeVisit: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,private service:OneTimeVisitService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.oneTimeVisit = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      uid: ['', Validators.required],
      mnumber: ['', Validators.required],
      ioofficer: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      pcode: ['', Validators.required]
    });
    this.oneTimeVisit.valueChanges.subscribe(data => this.formUpdated(data));
  }
  formUpdated(data?: any) {
    if (!this.oneTimeVisit) { return; }
    const form = this.oneTimeVisit;
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

  }
  formErrors = {
    name: '',
    dob: '',
    uid: '',
    mnumber: '',
    ioofficer: '',
    address: '',
    city: '',
    country: '',
    pcode: ''
  };
  validationMessages = {
    'name': {
      'required': 'Email is required.',
    },
    'dob': {
      'required': 'Date Of Birth is required.'
    },
    'uid': {
      'required': 'UID is required.'
    },
    'mnumber': {
      'required': 'Mobile Number is required.'
    },
    'ioofficer': {
      'required': 'Name Of the Officer is required.'
    },
    'address': {
      'required': 'Address is required.'
    },
    'city': {
      'required': 'City is required.'
    },
    'country': {
      'required': 'Country is required.'
    },
    'pcode': {
      'required': 'Pin Code is required.'
    },

  };
}
