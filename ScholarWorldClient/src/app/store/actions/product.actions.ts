import {Action} from "@ngrx/store";

export const GET_PRODUCT = '[Product] Get Product';

export const GET_PRODUCT_FROM_SERVER_SUCCESS = '[Product] Get Product From Server Success';

export const GET_PRODUCT_FROM_SERVER_FAILURE = '[Product] Get Product From Server Failure';

export class getProduct implements Action {
  readonly type = GET_PRODUCT;
  constructor(public payload:{tokenIdentifier:string}) {}
}

export class getProductFromServerSuccess implements Action {
  readonly type = GET_PRODUCT_FROM_SERVER_SUCCESS;
  constructor(public payload:any) {}
}

export class getProductFromServerFailure implements Action {
  readonly type = GET_PRODUCT_FROM_SERVER_FAILURE;
  constructor(public payload:any) {}
}

export type ProductActions = getProduct | getProductFromServerSuccess | getProductFromServerFailure;
