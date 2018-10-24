import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpassService } from '../spass.service';

@Component({
  selector: 'app-tasks-management',
  templateUrl: './tasks-management.component.html',
  styleUrls: ['./tasks-management.component.css']
})
export class TasksManagementComponent implements OnInit {
  loggedMail: string;
  dataNames: any;
  toolNames: any;
  selectedTool: string;
  selectedData: string;
  parameters: any;

  constructor(private router: Router, private apiService: SpassService) { }

  ngOnInit() {
    this.loggedMail = localStorage.getItem('loggedMail');
    if (!this.loggedMail) {
      this.router.navigate(['/', 'login']);
    }

    this.apiService.getBlobFiles().subscribe(response => {
      this.dataNames = response.replace('[', '').replace(']', '').split('"').join('').replace(' ', '').split(',');
    });

    this.apiService.getTools().subscribe(response => {
      this.toolNames = response.replace('[', '').replace(']', '').split('"').join('').replace(/\s/g, '').split(',');
    });
  }

  submitTask() {
    console.log('this is the tool ' + this.selectedTool);
    console.log('this is the data ' + this.selectedData);
  }

  loadParameters() {
    this.apiService.loadParameters(this.selectedTool)
    .subscribe(response => {
      console.log(response);
    });
  }

}
