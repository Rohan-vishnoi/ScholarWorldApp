import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CartService} from "../service/cart.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import * as CartActions from "../actions/cart.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class CartEffects {

  private actions$ = inject(Actions);
  private cartService = inject(CartService);
  private snackBar = inject(MatSnackBar);

  // addItem$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(CartActions.ADD_TO_CART),
  //     mergeMap((action: CartActions.AddToCart) => {
  //       return this.cartService.addItem(action.payload).pipe(
  //         map((response) => {
  //           this.snackBar.open('Item added to cart!', 'Close', { duration: 3000 });
  //           return new CartActions.AddToCartSuccess({ payload: response });
  //         }),
  //         catchError((error) => {
  //           this.snackBar.open('Failed to add item to cart!', 'Close', { duration: 3000 });
  //           return of(new CartActions.AddToCartFailure({ payload: error }));
  //         })
  //       );
  //     })
  //   );
  // });

}
