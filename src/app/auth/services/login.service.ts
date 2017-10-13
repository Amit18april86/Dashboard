import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Authenticate } from '../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }
  login( credentials: Authenticate): Observable<any> {
    return this.http.get(
      environment.loginApi + `email=${credentials.email}&password=${credentials.password}`,
      {}).map(response => {
      if (response.json().length > 0) {
        return response.json();
      } else {
        throw 404;
      }
    });
  }
}
