import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';

const API_URL = environment.apiUrl;
const CREATE_USER_ENDPOINT = environment.createUserEndpoint;
const AUTH_USER_ENDPOINT = environment.authUserEndpoint;
const UPLOAD_DATA_ENDPOINT = environment.uploadDataEndpoint;
const GET_FILES_BLOB_ENDPOINT = environment.getFilesEndpoint;
const UPLOAD_TOOL_ENDPOINT = environment.uploadToolsEndpoint;
const GET_TOOLS_BLOB_ENDPOINT = environment.getToolsEndpoint;
const DELETE_TOOL_ENPOINT = environment.deleteToolsEnpoint;
const DELETE_DATA_ENDPOINT = environment.deleteDataEndpoint;
const GET_PARAMETERS_ENDPOINT = environment.getParametersEndpoint;
const SUBMIT_TASK_ENDPOINT = environment.submitTaskEndpoint;

@Injectable()
export class SpassService {
  public currentMail: string;

  constructor(private http: Http) {
  }

  createUser(user_data: object): Observable<object> {
    return this.http
    .post(API_URL + CREATE_USER_ENDPOINT, user_data)
    .map(response => {
      return response;
    });
  }

  authenticateUser(user_data: object): Observable<object> {
    return this.http
      .post(API_URL + AUTH_USER_ENDPOINT, user_data)
      .map(response => {
        if (response['status'] === 200) {
          localStorage.setItem('loggedMail', user_data['email']);
          localStorage.setItem('loggedPass', user_data['pass']);
        }
        return response;
      });
  }

  uploadData(fileToUpload: File, nameOfFile: string): Observable<object> {
    const formData: FormData = new FormData();
    formData.append(nameOfFile, fileToUpload, fileToUpload.name);

    return this.http
    .post(API_URL + UPLOAD_DATA_ENDPOINT, formData)
    .map(response => {
      return response;
    });
  }

  getBlobFiles(): Observable<string> {
    return this.http
    .get(API_URL + GET_FILES_BLOB_ENDPOINT)
    .map(response => {
      return response['_body'];
    });
  }

  uploadTool(fileToUpload: File, nameOfFile: string, parameters: string): Observable<object> {
    const formData: FormData = new FormData();
    formData.append(nameOfFile, fileToUpload);
    formData.append('parameters', parameters);

    return this.http
    .post(API_URL + UPLOAD_TOOL_ENDPOINT, formData)
    .map(response => {
      return response;
    });
  }

  getTools(): Observable<string> {
    return this.http
    .get(API_URL + GET_TOOLS_BLOB_ENDPOINT)
    .map(response => {
      return response['_body'];
    });
  }

  deleteTool(name: string ) {
    return this.http
    .delete(API_URL + DELETE_TOOL_ENPOINT + name + '/')
    .map(response => {
      return response;
    });
  }

  deleteData(name: string) {
    return this.http
    .delete(API_URL + DELETE_DATA_ENDPOINT + name + '/')
    .map(response => {
      return response;
    });
  }

  loadParameters(toolName: string) {
    return this.http
    .get(API_URL + GET_PARAMETERS_ENDPOINT + toolName + '/')
    .map(response => {
      return response;
    });
  }

  submitTask(definition: object) {
    return this.http.post(API_URL + SUBMIT_TASK_ENDPOINT, definition)
    .map(response => {
      console.log(response);
      return response;
    });
  }

}
