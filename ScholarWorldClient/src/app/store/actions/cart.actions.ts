import {Action} from "@ngrx/store";

export const ADD_TO_CART = '[CART] ADD_TO_CART';

export const REMOVE_FROM_CART = '[CART] REMOVE_FROM_CART';

export const ADD_TO_CART_SUCCESS = '[CART] ADD_TO_CART_SUCCESS';

export const ADD_TO_CART_FAILURE = '[CART] ADD_TO_CART_FAILURE';

export class AddToCart implements Action {
  readonly type = ADD_TO_CART;
  constructor(public payload: any) {}
}

export class RemoveFromCart implements Action {
  readonly type = REMOVE_FROM_CART;
  constructor(public payload: any) {}
}

export class AddToCartSuccess implements Action {
  readonly type = ADD_TO_CART_SUCCESS;
  constructor(public payload: any) {}
}

export class AddToCartFailure implements Action {
  readonly type = ADD_TO_CART_FAILURE;
  constructor(public payload: any) {}
}

export type CartActions = AddToCart | RemoveFromCart | AddToCartFailure | AddToCartSuccess;
