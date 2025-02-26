// registration.service.ts
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' }) // Ensure this is present
export class RegistrationService {

  constructor(private http: HttpClient) {}

  registerUser(payload: any): Observable<any> { // Return type is Observable
    return this.http.post('/api/register', payload); // Example using HttpClient
  }
}
