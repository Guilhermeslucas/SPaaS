import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools-management',
  templateUrl: './tools-management.component.html',
  styleUrls: ['./tools-management.component.css']
})
export class ToolsManagementComponent implements OnInit {
  loggedMail: string;
  
  constructor() { }

  ngOnInit() {
    this.loggedMail = localStorage.getItem('loggedMail');
  }

}
