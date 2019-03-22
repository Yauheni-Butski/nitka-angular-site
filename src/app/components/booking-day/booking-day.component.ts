import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-day',
  templateUrl: './booking-day.component.html',
  styleUrls: ['./booking-day.component.scss']
})
export class BookingDayComponent implements OnInit {
  bookingForm = this.fb.group({
    name: ['', Validators.required],
    city: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
