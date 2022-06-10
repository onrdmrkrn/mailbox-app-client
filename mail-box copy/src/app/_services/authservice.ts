import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {User} from "../_data/entities/User";
import {RegisterResponse} from "../_data/response/RegisterResponse";

import {Observable} from "rxjs";

const AUTH_API = 'http://localhost:5050/';
const MAILBOX_API = 'http://localhost:5050/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' },
  )
};



@Injectable({
  providedIn: 'root'
})
export class Authservice {
  constructor(private http: HttpClient) {
    httpOptions.headers.append('Access-Control-Allow-Origin','http://localhost:4200');
    httpOptions.headers.append('Access-Control-Allow-Origin','http://127.0.0.1:4200');
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
  }

  register(registerRequest:User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(AUTH_API + 'auth/user/register', registerRequest
      , httpOptions);
  }

  login(registerRequest:User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(AUTH_API + 'auth/user/login', registerRequest
      , httpOptions);
  }





}
