import { Component, OnInit } from '@angular/core';
import { SpassService } from '../spass.service';

@Component({
  selector: 'app-tools-management',
  templateUrl: './tools-management.component.html',
  styleUrls: ['./tools-management.component.css']
})
export class ToolsManagementComponent implements OnInit {
  loggedMail: string;
  fileToUpload: File;
  nameOfFile: string;
  fileNames: any;

  constructor(private apiService: SpassService) { }

  ngOnInit() {
    this.loggedMail = localStorage.getItem('loggedMail');
    this.fileToUpload = null;
    this.apiService.getTools().subscribe(response => {
      this.fileNames = response.replace('[', '').replace(']', '').split('"').join('').replace(/\s/g, '').split(',');
    });
  }

  onFileChange(files: FileList) {
    this.fileToUpload = files.item(0);
    this.apiService.uploadTool(this.fileToUpload, this.nameOfFile, 'teste:tipo do teste, teste2:tipo do teste 2')
    .subscribe(response => {
      console.log(response);
    });
  }

}
