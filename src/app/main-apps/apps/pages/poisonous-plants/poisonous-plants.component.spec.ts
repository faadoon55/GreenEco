import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoisonousPlantsComponent } from './poisonous-plants.component';

describe('PoisonousPlantsComponent', () => {
  let component: PoisonousPlantsComponent;
  let fixture: ComponentFixture<PoisonousPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoisonousPlantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoisonousPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
