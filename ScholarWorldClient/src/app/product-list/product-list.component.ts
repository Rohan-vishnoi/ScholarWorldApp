import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from "../store/model/product.model";
import {ProductService} from "../store/service/product.service";
import {CartService} from "../store/service/cart.service";
import {CartItemAdd} from "../store/model/cart.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  error: string | null = null;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    let token: string = "";
    this.products$ = this.productService.getProducts(token); // Initialize observable
  }

  ngOnInit(): void {
    this.products$.subscribe({
      error: (err) => this.error = `Failed to load products: ${err.message}`
    });
  }

  addToCart(product: Product): void {
    const itemToAdd: CartItemAdd = {
      productId: product.id,
      quantity: 1,
    };

    this.cartService.addItem(itemToAdd,"").subscribe({
      next: (updatedCart) => {
        console.log('Item added to cart:', updatedCart);
      },
      error: (err) => {
        console.error('Failed to add item:', err);
        this.error = `Failed to add ${product.name} to cart: ${err.message}`;
      }
    });
  }
}
