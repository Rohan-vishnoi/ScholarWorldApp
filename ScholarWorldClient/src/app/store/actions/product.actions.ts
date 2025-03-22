import {Action} from "@ngrx/store";

export const GET_PRODUCT = '[Product] Get Product';

export const GET_PRODUCT_FROM_SERVER_SUCCESS = '[Product] Get Product From Server Success';

export const GET_PRODUCT_FROM_SERVER_FAILURE = '[Product] Get Product From Server Failure';

export class getProduct implements Action {
  readonly type = GET_PRODUCT;
  constructor(payload:any) {}
}

export class getProductFromServerSuccess implements Action {
  readonly type = GET_PRODUCT_FROM_SERVER_SUCCESS;
  constructor(payload:any) {}
}

export class getProductFromServerFailure implements Action {
  readonly type = GET_PRODUCT_FROM_SERVER_FAILURE;
  constructor(payload:any) {}
}

export type ProductActions = getProduct | getProductFromServerSuccess | getProductFromServerFailure;
