import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyAPlantComponent } from './identify-a-plant.component';

describe('IdentifyAPlantComponent', () => {
  let component: IdentifyAPlantComponent;
  let fixture: ComponentFixture<IdentifyAPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyAPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyAPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
