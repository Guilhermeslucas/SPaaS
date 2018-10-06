import { Component, OnInit } from '@angular/core';
import { SpassService } from '../spass.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {
  loggedMail: string;
  constructor(private apiservice: SpassService) {
   }

  ngOnInit() {
    this.loggedMail = localStorage.getItem('loggedMail');
  }

}
