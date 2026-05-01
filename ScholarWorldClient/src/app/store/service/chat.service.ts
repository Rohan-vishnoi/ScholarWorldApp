import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'


export interface ChatResponse {
  reply: string;
}

@Injectable({providedIn: 'root'})
export class ChatService {

  private chatApiUrl = 'http://localhost:8000/auth/chat';
  constructor(private http:HttpClient) { }

  sendMessage(message: string): Observable<ChatResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ChatResponse>(this.chatApiUrl, {message}, {headers});
  }
}
