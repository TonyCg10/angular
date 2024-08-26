import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogTopBarComponent } from './dog-top-bar.component';

describe('DogTopBarComponent', () => {
  let component: DogTopBarComponent;
  let fixture: ComponentFixture<DogTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogTopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
