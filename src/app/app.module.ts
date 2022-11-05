import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WeeklyActivitiesComponent } from './weekly-activities/weekly-activities.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DisplayCoursesComponent } from './display-courses/display-courses.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ActionButtonsComponent } from './action-button/action-button.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DiscoverCourseComponent } from './discover-course/discover-course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WeeklyActivitiesComponent,
    StudentDashboardComponent,
    UserNavComponent,
    MainDashboardComponent,
    DisplayCoursesComponent,
    MainNavComponent,
    SignUpComponent,
    ActionButtonsComponent,
    LandingPageComponent,
    DiscoverCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
