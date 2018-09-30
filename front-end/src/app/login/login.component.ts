import { Component, OnInit } from '@angular/core';
import { SpassService } from '../spass.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  pass: string;
  finalData: object;

  constructor(private apiService: SpassService) { }

  ngOnInit() {
    this.finalData = {};
  }

  onSubmit() {
    this.finalData['email'] = this.email;
    this.finalData['pass'] = this.pass;

    this.apiService.authenticateUser(this.finalData)
      .subscribe(response => {
        console.log(response);
      });
  }
}
