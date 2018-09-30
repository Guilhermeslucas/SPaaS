import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';

const API_URL = environment.apiUrl;
const CREATE_USER_ENDPOINT = environment.createUserEndpoint;

@Injectable()
export class SpassService {

  constructor(private http: Http) { }

  createUser(user_data: object): Observable<object> {
    console.log(API_URL + CREATE_USER_ENDPOINT);
    return this.http
    .post(API_URL + CREATE_USER_ENDPOINT, user_data)
    .map(response => {
      return response;
    });
  }
}
