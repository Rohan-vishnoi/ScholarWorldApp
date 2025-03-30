import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.combineReducer";
import * as ProductActions from "../store/actions/product.actions";
import {Subject, takeUntil} from "rxjs";
import {Product} from "../store/model/product.model";
import {CartItemAdd} from "../store/model/cart.model";
import {CartService} from "../store/service/cart.service";

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.css'
})
export class ProductCatalogComponent {

  private unsubscribe$ = new Subject<void>();

  product:any = [];

  error: string | null = null;

  constructor(private store: Store<AppState>, private cartService:CartService) {}

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Initializes the component by fetching products and subscribing to product state changes.
   */
  ngOnInit(){
    this.getProducts();
    this.store.select((state) => state.productState.productData).subscribe((productData) => {
      this.product = productData;
      console.log(this.product);
    });
  }

  /**
   * Dispatches an action to fetch products from the store.
   * @returns {any} - The dispatched action.
   */
  getProducts = ():any => {
    this.store.dispatch(new ProductActions.getProduct({
      tokenIdentifier:this.getTokenId()
    }));
  }

  /**
   * Retrieves the token identifier from the authentication state.
   * @returns {string} - The token identifier.
   */
  getTokenId = ():string => {
    let tokenId: string = "";
    this.store.select((state) => state.authState.authData)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((authData) => {
        tokenId = authData.token;
      });
    return tokenId;
  }

  /**
   * Dispatches an action to add a product to the cart.
   * @param product
   */
  addToCart(product: Product): void {
    const itemToAdd: CartItemAdd = {
      productId: product.id,
      quantity: 1,
    };

    this.cartService.addItem(itemToAdd , this.getTokenId()).subscribe({
      next: (updatedCart) => {
        console.log('Item added to cart:', updatedCart);
      },
      error: (err) => {
        console.error('Failed to add item:', err);
        this.error = `Failed to add ${product.name} to cart: ${err.message}`;
      }
    });
  }

  /**
   * Lifecycle hook that is called when a directive, pipe, or service is destroyed.
   * Unsubscribes from all subscriptions to prevent memory leaks.
   */
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
