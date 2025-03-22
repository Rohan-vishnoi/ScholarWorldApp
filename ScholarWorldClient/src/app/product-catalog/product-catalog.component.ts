import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.combineReducer";
import * as ProductActions from "../store/actions/product.actions";
import {Subject, takeUntil} from "rxjs";
import {getProduct} from "../store/actions/product.actions";

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.css'
})
export class ProductCatalogComponent {

  private unsubscribe$ = new Subject<void>();

  private tokenId: string= "";


  constructor(private store: Store<AppState>) {
  }

  ngOnInit(){
    this.getProducts();
  }


  getProducts = ():any => {
    this.store.dispatch(new ProductActions.getProduct({
      tokenIdentifier:this.tokenId
    }));
  }

  getTokenId = () => {
    this.store.select((state) => state.authState.authData)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((authData) => {
        this.tokenId = authData.token;
      })
  }


  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
