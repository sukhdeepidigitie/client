import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NewClientService} from './new-client.service';
@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css'],
  providers:[NewClientService]
})
export class NewClientComponent implements OnInit {
newClient: FormGroup;
submitted = false;
  constructor( private fb: FormBuilder,
  private service:NewClientService) {
    this.createForm();
   }
     ngOnInit() {
  }

  createForm() {
    this.newClient = this.fb.group({
     name:['',Validators.required],
     dob:['',Validators.required],
     protocol:['',Validators.required],
     uid:['',Validators.required],
     mnumber:['',Validators.required],
     iofficer:['',Validators.required],
     address:['',Validators.required],
     city:['',Validators.required],
     country:['',Validators.required],
     pcode:['',Validators.required]
    });
    this.newClient.valueChanges.subscribe(data => this.formUpdated(data));
  }


  formUpdated(data?: any) {
    if (!this.newClient) { return; }
    const form = this.newClient;
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
    this.service.submitData(this.newClient.value)
    
  }
  formErrors = {
     name:'',
     dob:'',
     protocol:'',
     uid:'',
     mnumber:'',
     ioofficer:'',
     address:'',
     city:'',
     country:'',
     pcode:''
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
