import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newEmail: string;
  newPass: string;
  newConfirmedPass: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newEmail);
    console.log(this.newPass);
    console.log(this.newConfirmedPass);
  }

}
