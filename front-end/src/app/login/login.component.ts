import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  pass: string;
  finalData: object;

  constructor() { }

  ngOnInit() {
    this.finalData = {};
  }

  onSubmit() {
    this.finalData['email'] = this.email;
    this.finalData['pass'] = this.pass;

    console.log(this.finalData);
  }

}
