import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsHarmfulToPlantsComponent } from './animals-harmful-to-plants.component';

describe('AnimalsHarmfulToPlantsComponent', () => {
  let component: AnimalsHarmfulToPlantsComponent;
  let fixture: ComponentFixture<AnimalsHarmfulToPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsHarmfulToPlantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsHarmfulToPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
