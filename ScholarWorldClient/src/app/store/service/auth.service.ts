import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
  private loginApiUrl = 'http://localhost:8000/auth/login';

  constructor(private http:HttpClient) {}

  loginUser(payload: any) : Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.loginApiUrl, payload, {headers});
  }
}
