import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeOldComponent } from './contact-me-old.component';

describe('ContactMeOldComponent', () => {
  let component: ContactMeOldComponent;
  let fixture: ComponentFixture<ContactMeOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMeOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMeOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
