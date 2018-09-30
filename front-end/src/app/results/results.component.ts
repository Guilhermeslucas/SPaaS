import { Component, OnInit } from '@angular/core';
import { SpassService } from '../spass.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  loggedMail: string;

  constructor(private apiservice: SpassService) {
    this.loggedMail = this.apiservice.getLoggedUser();
   }

  ngOnInit() {
    this.loggedMail = this.apiservice.getLoggedUser();
  }

}
