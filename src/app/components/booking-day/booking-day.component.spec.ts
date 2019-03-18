import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDayComponent } from './booking-day.component';

describe('BookingDayComponent', () => {
  let component: BookingDayComponent;
  let fixture: ComponentFixture<BookingDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
