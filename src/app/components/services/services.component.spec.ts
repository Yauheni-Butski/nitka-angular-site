import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComComponent } from './services.component';

describe('ServicesComComponent', () => {
  let component: ServicesComComponent;
  let fixture: ComponentFixture<ServicesComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
