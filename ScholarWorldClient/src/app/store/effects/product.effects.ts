import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {ProductService} from "../service/product.service";
import * as ProductActions from "../actions/product.actions";
import {AppState} from "../../../app.combineReducer";
import {Store} from "@ngrx/store";

@Injectable()
export class ProductEffects{

private actions$= inject(Actions);
private productService= inject(ProductService);
private store=inject(Store<AppState>);


  getProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.GET_PRODUCT),
      mergeMap((action: ProductActions.getProduct) => {
          return this.productService.getProducts(action.payload).pipe(
          map((response) => {
            return new ProductActions.getProductFromServerSuccess({ payload: response });
          }),
          catchError((error) => {
            return of(new ProductActions.getProductFromServerFailure({ payload: error }));
          })
        );
      })
    );
  });
}
