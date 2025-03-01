import {Action} from "@ngrx/store";

export const LOGIN_USER = '[LU] LOGIN_USER';

export const LOGIN_USER_SUCCESS = '[LU] LOGIN_USER_SUCCESS';

export const LOGIN_USER_FAILURE = '[LU] LOGIN_USER_FAILURE';

export class LoginUser implements Action {
    readonly type = LOGIN_USER;
    constructor(public payload: any) {}
}

export class loginUserSuccess implements Action {
    readonly type = LOGIN_USER_SUCCESS;
    constructor(public payload: any) {}

}

export class loginUserFailure implements Action {
  readonly type = LOGIN_USER_FAILURE
  constructor(public payload: any) {
  }
}

export type SessionsActions = LoginUser | loginUserSuccess | loginUserFailure;
