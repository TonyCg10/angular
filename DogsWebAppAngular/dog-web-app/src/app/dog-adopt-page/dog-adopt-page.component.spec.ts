import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogAdoptPageComponent } from './dog-adopt-page.component';

describe('DogAdoptPageComponent', () => {
  let component: DogAdoptPageComponent;
  let fixture: ComponentFixture<DogAdoptPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogAdoptPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogAdoptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
