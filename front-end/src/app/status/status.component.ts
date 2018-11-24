import { Component, OnInit } from '@angular/core';
import { SpassService } from '../spass.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {
  loggedMail: string;
  allStatus: any;

  constructor(private apiservice: SpassService) {
   }

  ngOnInit() {
    this.loggedMail = localStorage.getItem('loggedMail');
    this.apiservice.getStatus().subscribe(response => {
      this.allStatus = JSON.parse(response);
      console.log(this.allStatus);
    });
  }

}
