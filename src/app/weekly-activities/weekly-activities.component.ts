import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-activities',
  templateUrl: './weekly-activities.component.html',
  styleUrls: ['./weekly-activities.component.css']
})
export class WeeklyActivitiesComponent implements OnInit {

  constructor() { }
  numbOfCourse: Number = 10;
  wishlistNumb: Number = 4;
  percentage: Number = 39;
  tableTitle: string = "weekly-activities";

  ngOnInit(): void {
  }

}
