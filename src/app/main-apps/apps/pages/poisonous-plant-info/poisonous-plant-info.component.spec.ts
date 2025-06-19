import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoisonousPlantInfoComponent } from './poisonous-plant-info.component';

describe('PoisonousPlantInfoComponent', () => {
  let component: PoisonousPlantInfoComponent;
  let fixture: ComponentFixture<PoisonousPlantInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoisonousPlantInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoisonousPlantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
