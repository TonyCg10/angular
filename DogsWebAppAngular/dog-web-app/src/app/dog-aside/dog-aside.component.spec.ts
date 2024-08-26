import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogAsideComponent } from './dog-aside.component';

describe('DogAsideComponent', () => {
  let component: DogAsideComponent;
  let fixture: ComponentFixture<DogAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogAsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
