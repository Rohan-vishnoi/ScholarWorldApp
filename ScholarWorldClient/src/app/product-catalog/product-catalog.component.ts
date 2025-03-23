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

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(){
    this.getProducts();
  }
  product = {
    title: 'Example Product',
    description: 'This is an example product description. It contains various details about the product.',
    imageUrl: '',
    category: 'Electronics',
    rate:"4.5",
    count:300
  };

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
