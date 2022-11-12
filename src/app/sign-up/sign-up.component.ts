import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    name : new FormControl(''),
    age : new FormControl(''),
    password: new FormControl(null)
  });

  constructor() { }


  onSubmit(){
    console.warn(this.signUpForm.value);
  }

  sub(){
    this.onSubmit();
  }
  ngOnInit(): void {
  }

}
