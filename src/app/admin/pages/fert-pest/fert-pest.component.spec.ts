import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertPestComponent } from './fert-pest.component';

describe('FertPestComponent', () => {
  let component: FertPestComponent;
  let fixture: ComponentFixture<FertPestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertPestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FertPestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
