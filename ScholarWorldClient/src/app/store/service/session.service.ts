import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class SessionService {
  private loginApiUrl = 'http://localhost:8000/login';

  constructor(private http:HttpClient) {}

  loginUser(payload: any) : Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.loginApiUrl, payload, { headers });
  }
}
