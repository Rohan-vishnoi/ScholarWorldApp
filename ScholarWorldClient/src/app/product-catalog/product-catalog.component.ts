import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.combineReducer";
import * as ProductActions from "../store/actions/product.actions";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.css'
})
export class ProductCatalogComponent {

  private unsubscribe$ = new Subject<void>();

  product:any = [];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(){
    this.getProducts();
    this.store.select((state) => state.productState.productData).subscribe((productData) => {
      this.product = productData;
      console.log(this.product);
    });
  }

  getProducts = ():any => {
    this.store.dispatch(new ProductActions.getProduct({
      tokenIdentifier:this.getTokenId()
    }));
  }

  getTokenId = () => {
    let tokenId: string = "";
    this.store.select((state) => state.authState.authData)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((authData) => {
        tokenId = authData.token;
      });
    return tokenId;
  }


  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
