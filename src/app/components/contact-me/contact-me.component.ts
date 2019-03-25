import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactMeForm = this.fb.group({
    name: ['', Validators.required],
    city: [''],
    phoneNumber: ['', Validators.required],
    email: ['', Validators.email]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
