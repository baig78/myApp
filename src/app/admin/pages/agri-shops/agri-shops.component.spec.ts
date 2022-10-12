import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriShopsComponent } from './agri-shops.component';

describe('AgriShopsComponent', () => {
  let component: AgriShopsComponent;
  let fixture: ComponentFixture<AgriShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriShopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
