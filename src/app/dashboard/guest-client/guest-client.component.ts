import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuestClientService } from './guest-client.service';
@Component({
  selector: 'app-guest-client',
  templateUrl: './guest-client.component.html',
  styleUrls: ['./guest-client.component.css'],
  providers: [GuestClientService]
})
export class GuestClientComponent implements OnInit {
  guestClient: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private service: GuestClientService) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.guestClient = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      protocol: ['', Validators.required],
      uid: ['', Validators.required],
      mnumber: ['', Validators.required],
      iofficer: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      pcode: ['', Validators.required]
    });
    this.guestClient.valueChanges.subscribe(data => this.formUpdated(data));
  }
  formUpdated(data?: any) {
    if (!this.guestClient) { return; }
    const form = this.guestClient;
    console.log(form);
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      // console.log(control);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + '';
        }
      }
    }
  }
  onSubmit() {
    this.submitted = true;
    this.service.submitData(this.guestClient.value);
  }
  formErrors = {
    name: '',
    dob: '',
    protocol: '',
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
