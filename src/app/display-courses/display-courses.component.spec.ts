import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCoursesComponent } from './display-courses.component';

describe('DisplayCoursesComponent', () => {
  let component: DisplayCoursesComponent;
  let fixture: ComponentFixture<DisplayCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
