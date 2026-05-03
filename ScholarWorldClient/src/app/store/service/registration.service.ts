// registration.service.ts
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' }) // Ensure this is present
export class RegistrationService {

  private apiUrl = 'https://scholarworld-api-653587119328.us-central1.run.app/auth/signup';

  constructor(private http: HttpClient) {}

  registerUser(payload: any): Observable<any> { // Return type is Observable
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, payload, { headers });
  }
}
