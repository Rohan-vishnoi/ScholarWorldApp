import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {ProductService} from "../service/product.service";
import * as ProductActions from "../actions/product.actions";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class ProductEffects{

private actions$= inject(Actions);
private productService= inject(ProductService);
private snackBar= inject(MatSnackBar);


  getProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.GET_PRODUCT),
      mergeMap((action: ProductActions.getProduct) => {
          return this.productService.getProducts(action.payload).pipe(
          map((response) => {
            return new ProductActions.getProductFromServerSuccess({ payload: response });
          }),
          catchError((error) => {
            this.snackBar.open('Failed to get products!', 'Close', {
              duration: 3000,
            });
            return of(new ProductActions.getProductFromServerFailure({ payload: error }));
          })
        );
      })
    );
  });
}
