import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import {CartItemAdd, CartView} from "../model/cart.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = `http://localhost:8000/auth/cart`;

  private cartSubject = new BehaviorSubject<CartView | null>(null);
  public cart$ = this.cartSubject.asObservable();
  constructor(private http: HttpClient) {
    this.loadInitialCart();
  }

  /** Gets the current value of the cart from the BehaviorSubject */
  public getCurrentCartValue(): CartView | null {
    return this.cartSubject.getValue();
  }

  /** Fetch cart from backend and update the BehaviorSubject */
  public loadInitialCart(): void {
    this.http.get<CartView>(this.apiUrl).pipe(
      tap(cart => this.cartSubject.next(cart)), // Update subject on success
      catchError(this.handleError)
    ).subscribe(); // Subscribe to trigger the request
  }

  /** Add item to backend cart and update the BehaviorSubject */
  public addItem(itemToAdd: CartItemAdd, tokenId:string): Observable<CartView> {
    const headers = new HttpHeaders(
      {
        'Authorization': `Bearer ${tokenId}`,
        'Content-Type': 'application/json'
      });

    return this.http.post<CartView>(`${this.apiUrl}/items`, itemToAdd,{headers}).pipe(
      tap(updatedCart => this.cartSubject.next(updatedCart)), // Update subject
      catchError(this.handleError)
    );
  }

  /** Update item quantity in backend cart and update the BehaviorSubject */
  public updateItemQuantity(itemId: number, quantity: number): Observable<CartView> {
    if (quantity <= 0) {
      return this.removeItem(itemId);
    }
    return this.http.put<CartView>(`${this.apiUrl}/items/${itemId}`, { quantity }).pipe(
      tap(updatedCart => this.cartSubject.next(updatedCart)), // Update subject
      catchError(this.handleError)
    );
  }

  /** Remove item from backend cart and update the BehaviorSubject */
  public removeItem(itemId: number): Observable<CartView> {
    return this.http.delete<CartView>(`${this.apiUrl}/items/${itemId}`).pipe(
      tap(updatedCart => this.cartSubject.next(updatedCart)), // Update subject
      catchError(this.handleError)
    );
  }

  /** Clear the entire backend cart and update the BehaviorSubject */
  public clearCart(): Observable<void> {
    return this.http.delete<void>(this.apiUrl).pipe(
      tap(() => {
        this.loadInitialCart();
      }),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
