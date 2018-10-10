import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SpassService } from '../spass.service';

@Component({
  selector: 'app-data-management',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.css']
})
export class DataManagementComponent implements OnInit {
  loggedMail: string;
  fileToUpload: File;

  constructor(private apiService: SpassService) { }

  ngOnInit() {
    this.loggedMail = localStorage.getItem('loggedMail');
    this.fileToUpload = null;
  }

  onFileChange(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    this.apiService.uploadData(this.fileToUpload)
    .subscribe(response => {
      console.log(response);
    });
  }

  // postFile(fileToUpload: File): Observable<boolean> {
  //   const endpoint = 'your-destination-url';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.httpClient
  //     .post(endpoint, formData, { headers: yourHeadersConfig })
  //     .map(() => { return true; })
  //     .catch((e) => this.handleError(e));
  // }



}
