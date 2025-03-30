import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import {CartItemView, CartView} from "../store/model/cart.model";
import {CartService} from "../store/service/cart.service";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit, OnDestroy {
  cart$: Observable<CartView | null>;
  error: string | null = null;

  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.cart$;
  }

  ngOnInit(): void {
    if (!this.cartService.getCurrentCartValue()) {
      this.cartService.loadInitialCart();
    }
  }

  ngOnDestroy(): void {

  }

  updateQuantity(item: CartItemView, quantityStr: string): void {
    const quantity = parseInt(quantityStr, 10);
    if (!isNaN(quantity)) {
      this.error = null; // Clear previous error
      this.cartService.updateItemQuantity(item.itemId, quantity).subscribe({
        next: () => { /* Quantity updated */ },
        error: (err: { message: any; }) => this.error = `Failed to update quantity: ${err.message}`
      });
    } else {
      this.error = "Please enter a valid number for quantity.";
    }
  }

  removeItem(itemId: number): void {
    this.error = null; // Clear previous error
    this.cartService.removeItem(itemId).subscribe({
      next: () => { /* Item removed */ },
      error: (err: { message: any; }) => this.error = `Failed to remove item: ${err.message}`
    });
  }

  clearCart(): void {
    if (confirm('Are you sure you want to clear the entire cart?')) {
      this.error = null; // Clear previous error
      this.cartService.clearCart().subscribe({
        next: () => { /* Cart cleared */ },
        error: (err: { message: any; }) => this.error = `Failed to clear cart: ${err.message}`
      });
    }
  }
}
