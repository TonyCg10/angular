import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogImgComponent } from './dog-img.component';

describe('DogImgComponent', () => {
  let component: DogImgComponent;
  let fixture: ComponentFixture<DogImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
