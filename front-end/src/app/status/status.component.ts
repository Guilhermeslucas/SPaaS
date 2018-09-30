import { Component, OnInit } from '@angular/core';
import { SpassService } from '../spass.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {
  public loggedMail: string;
  constructor(private apiservice: SpassService) {
    this.loggedMail = this.apiservice.getLoggedUser();
   }

  ngOnInit() {
    this.loggedMail = this.apiservice.getLoggedUser();
  }

}
