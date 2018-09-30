import { Component, OnInit } from '@angular/core';
import { SpassService } from '../spass.service';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent implements OnInit {
  loggedMail: string;

  constructor(private apiservice: SpassService) { }

  ngOnInit() {
    this.loggedMail = this.apiservice.getLoggedUser();
  }

}
