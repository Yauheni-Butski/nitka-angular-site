import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';
import { whiteSpaceValidator, phoneNumberValidator, onlyLettersValidator } from '../../../shared/form-validators';


/** Error when invalid control is dirty, touched, or submitted. */
export class MaterialErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactMeForm: FormGroup;
  message: string;
  isErrorSubmit = false;

  matcher = new MaterialErrorStateMatcher();

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.contactMeForm = this.fb.group({
      name: ['', [Validators.required, whiteSpaceValidator(), onlyLettersValidator()]],
      city: ['', [whiteSpaceValidator(), onlyLettersValidator()]],
      phoneNumber: ['', [Validators.required, phoneNumberValidator()]],
      email: ['', Validators.email],
      comment: ['', Validators.maxLength(1000)]
    });
  }

  get name() { return this.contactMeForm.get('name'); }
  get phoneNumber() { return this.contactMeForm.get('phoneNumber'); }
  get email() { return this.contactMeForm.get('email'); }
  get comment() { return this.contactMeForm.get('comment'); }
  get city() { return this.contactMeForm.get('city'); }

  onSubmit() {
    if (this.contactMeForm.valid) {
      const contactData = new Contact(this.contactMeForm.value);
      this.contactService.submitContactForm(contactData).subscribe(res => {
        if (res.success) {
          this.contactMeForm.reset();
        } else {
          this.isErrorSubmit = true;
        }
        this.message = res.message;
      });
    }
  }
}
