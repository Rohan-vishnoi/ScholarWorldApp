import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
  private loginApiUrl = 'https://scholarworld-api-653587119328.us-central1.run.app/auth/login';

  constructor(private http:HttpClient) {}

  loginUser(payload: any) : Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.loginApiUrl, payload, {headers});
  }
}
