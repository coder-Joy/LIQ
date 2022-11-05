import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyActivitiesComponent } from './weekly-activities.component';

describe('WeeklyActivitiesComponent', () => {
  let component: WeeklyActivitiesComponent;
  let fixture: ComponentFixture<WeeklyActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
