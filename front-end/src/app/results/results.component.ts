import { Component, OnInit } from '@angular/core';
import { SpassService } from '../spass.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  loggedMail: string;
  results: any;

  constructor(private apiservice: SpassService) {
   }

  ngOnInit() {
    this.loggedMail = localStorage.getItem('loggedMail');
    this.apiservice.getResultsFiles().subscribe(response => {
      this.results = JSON.parse(response);
      console.log(this.results);
    });
  }

}
