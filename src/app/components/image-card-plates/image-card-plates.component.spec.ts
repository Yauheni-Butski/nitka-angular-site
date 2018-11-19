import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardPlatesComponent } from './image-card-plates.component';

describe('ImageCardPlatesComponent', () => {
  let component: ImageCardPlatesComponent;
  let fixture: ComponentFixture<ImageCardPlatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCardPlatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCardPlatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
