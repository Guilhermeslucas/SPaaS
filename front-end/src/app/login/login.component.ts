import { Component, OnInit } from '@angular/core';
import { SpassService } from '../spass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  pass: string;
  finalData: object;
  alertMessage: string;

  constructor(private apiService: SpassService, private router: Router) { }

  ngOnInit() {
    this.finalData = {};
    this.alertMessage = '';
  }

  onSubmit() {
    this.finalData['email'] = this.email;
    this.finalData['pass'] = this.pass;

    this.apiService.authenticateUser(this.finalData)
      .subscribe(response => {
        if (response['status'] === 200) {
          this.alertMessage = 'Your accont is successfully logged. Redirecting...';
          setTimeout(() => {
            this.router.navigate(['/', 'definition']);
        }, 3000);
        } else {
          this.alertMessage = 'This email is already used';
        }
      });
  }
}
