import { Component, OnInit } from '@angular/core';
import { SpassService } from '../spass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountcreation',
  templateUrl: './accountcreation.component.html',
  styleUrls: ['./accountcreation.component.css']
})
export class AccountcreationComponent implements OnInit {
  newEmail: string;
  newPass: string;
  newConfirmedPass: string;
  finalObject: object;
  alertMessage: string;

  constructor(private apiService: SpassService, public router: Router) { }

  ngOnInit() {
    this.finalObject = {};
    this.alertMessage = '';
  }

  onSubmit() {
    if (this.newPass === this.newConfirmedPass) {
      this.alertMessage = ' ';
    } else {
      this.alertMessage = 'The two passwords you are trying to use are different';
    }

    this.finalObject['email'] = this.newEmail;
    this.finalObject['password'] = this.newPass;

    this.apiService.createUser(this.finalObject)
    .subscribe(response => {
      if (response['status'] === 200) {
        this.alertMessage = 'Your accont was successfully created. Redirecting...';
        setTimeout(() => {
          this.router.navigate(['/', 'login']);
      }, 5000);
      } else {
        this.alertMessage = 'This email is already used';
      }
    });
  }
}
