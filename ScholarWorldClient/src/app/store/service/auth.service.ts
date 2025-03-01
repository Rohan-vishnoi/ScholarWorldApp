import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
  private loginApiUrl = 'http://localhost:8000/auth';

  constructor(private http:HttpClient) {}

  loginUser(payload: any) : Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.loginApiUrl, payload, { headers }).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
      })
    );
    }

    logoutUser() {
      localStorage.removeItem('token');
    }

    getToken():string | null {
      return localStorage.getItem('token');
    }
}
