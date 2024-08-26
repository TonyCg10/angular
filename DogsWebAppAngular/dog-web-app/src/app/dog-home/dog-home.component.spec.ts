import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogHomeComponent } from './dog-home.component';

describe('DogHomeComponent', () => {
  let component: DogHomeComponent;
  let fixture: ComponentFixture<DogHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
