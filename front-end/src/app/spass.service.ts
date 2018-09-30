import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';

const API_URL = environment.apiUrl;
const CREATE_USER_ENDPOINT = environment.createUserEndpoint;
const AUTH_USER_ENDPOINT = environment.authUserEndpoint;

@Injectable()
export class SpassService {
  static loggedMail: string;

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
          SpassService.loggedMail = user_data['email'];
        }
        return response;
      });
  }

  getLoggedUser(): string {
    return SpassService.loggedMail;
  }

}
