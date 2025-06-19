import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDiseasesComponent } from './plant-diseases.component';

describe('PlantDiseasesComponent', () => {
  let component: PlantDiseasesComponent;
  let fixture: ComponentFixture<PlantDiseasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantDiseasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
