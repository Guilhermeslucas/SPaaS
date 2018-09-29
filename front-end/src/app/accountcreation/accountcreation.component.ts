import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountcreation',
  templateUrl: './accountcreation.component.html',
  styleUrls: ['./accountcreation.component.css']
})
export class AccountcreationComponent implements OnInit {
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
