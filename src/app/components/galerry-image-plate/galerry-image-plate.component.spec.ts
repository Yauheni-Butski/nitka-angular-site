import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerryImagePlateComponent } from './galerry-image-plate.component';

describe('GalerryImagePlateComponent', () => {
  let component: GalerryImagePlateComponent;
  let fixture: ComponentFixture<GalerryImagePlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerryImagePlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerryImagePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
