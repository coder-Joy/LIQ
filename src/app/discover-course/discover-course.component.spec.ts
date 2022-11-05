import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCourseComponent } from './discover-course.component';

describe('DiscoverCourseComponent', () => {
  let component: DiscoverCourseComponent;
  let fixture: ComponentFixture<DiscoverCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
