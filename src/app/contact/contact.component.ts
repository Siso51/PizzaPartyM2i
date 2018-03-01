import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    
  }

  createForm() {
    this.contactForm = this.fb.group({
      subject: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email] ],
      message: ['', [Validators.required, Validators.maxLength(100)] ]
    });
  }

  ngOnInit(){
    this.createForm();
  }

}
