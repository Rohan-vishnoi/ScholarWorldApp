import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({providedIn:'root'})
export class ProductService {

  private productApiUrl = 'http://localhost:8000/products';

  constructor(private http:HttpClient) {}

  getProducts(payload: any): Observable<any> {
    const headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.productApiUrl, payload, {headers});
  }
}
