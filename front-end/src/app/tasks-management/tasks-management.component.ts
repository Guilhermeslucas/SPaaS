import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-management',
  templateUrl: './tasks-management.component.html',
  styleUrls: ['./tasks-management.component.css']
})
export class TasksManagementComponent implements OnInit {
  loggedMail: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loggedMail = localStorage.getItem('loggedMail');
    if (!this.loggedMail) {
      this.router.navigate(['/', 'login']);
    }
  }

}
