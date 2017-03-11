import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NewProjectService} from './new-project.service';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers:[NewProjectService]
})
export class NewProjectComponent implements OnInit {
newProject: FormGroup;
submitted = false;
  constructor(private fb: FormBuilder,private service:NewProjectService) { 
    this.createForm();
  }

  ngOnInit() {
  }

    createForm() {
    this.newProject = this.fb.group({
     company:['',Validators.required],
     protocol:['',Validators.required],
     sponsor:['',Validators.required],
     ioofficerf:['',Validators.required],
     ioofficerl:[''],
     address:['',Validators.required],
     city:['',Validators.required],
     country:['',Validators.required],
     pcode:['',Validators.required]
    });
    this.newProject.valueChanges.subscribe(data => this.formUpdated(data));
  }
  formUpdated(data?: any) {
    if (!this.newProject) { return; }
    const form = this.newProject;
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
    this.service.submitData(this.newProject.value)
    
  }
   formErrors = {
     company:'',
     protocol:'',
     sponsor:'',
     ioofficerf:'',
     ioofficerl:'',
     address:'',
     city:'',
     country:'',
     pcode:''
  };
   validationMessages = {
    'name': {
      'required': 'Email is required.',
    },
    'protocol': {
      'required': 'Date Of Birth is required.'
    },
    'sponsor': {
      'required': 'UID is required.'
    },
   
    'ioofficerf': {
      'required': 'Name Of the Officer is required.'
    },
    'ioofficerl': {
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
