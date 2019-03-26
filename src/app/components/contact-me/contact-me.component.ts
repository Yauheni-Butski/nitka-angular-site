import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactMeForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.contactMeForm = this.fb.group({
      name: ['', Validators.required],
      city: [''],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.email],
      comment: ['', Validators.maxLength(1000)]
    });
  }

  get name() { return this.contactMeForm.get('name'); }
  get phoneNumber() { return this.contactMeForm.get('phoneNumber'); }
  get email() { return this.contactMeForm.get('email'); }
  get comment() { return this.contactMeForm.get('comment'); }

  onSubmit() {
    console.log(this.contactMeForm.value);
    if (this.contactMeForm.valid){
      //TODO. Create Contact form Model object
      this.contactService.submitContactForm(this.contactMeForm.value).subscribe(res => {

      });

    }
  }

}
