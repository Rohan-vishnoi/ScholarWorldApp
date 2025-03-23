import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({providedIn:'root'})
export class ProductService {

  private productApiUrl = 'http://localhost:8000/products';

  constructor(private http:HttpClient) {}

    getProducts(token: any): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Authorization': `Bearer ${token.tokenIdentifier}`,
        'Content-Type': 'application/json'
    });
    return this.http.get(this.productApiUrl, {headers});
  }
}
