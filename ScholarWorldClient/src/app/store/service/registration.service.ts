// registration.service.ts
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' }) // Ensure this is present
export class RegistrationService {

  private apiUrl = 'http://localhost:8000/registration';

  constructor(private http: HttpClient) {}

  registerUser(payload: any): Observable<any> { // Return type is Observable
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, payload, { headers });
  }
}
