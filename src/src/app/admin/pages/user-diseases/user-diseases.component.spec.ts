import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDiseasesComponent } from './user-diseases.component';

describe('UserDiseasesComponent', () => {
  let component: UserDiseasesComponent;
  let fixture: ComponentFixture<UserDiseasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDiseasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
