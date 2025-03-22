import {Action} from "@ngrx/store";

export const LOGIN_USER = '[LU] LOGIN_USER';

export const REGISTER_USER_SUCCESS = '[LU] REGISTER_USER_SUCCESS';

export const REGISTER_USER_FAILURE = '[LU] REGISTER_USER_FAILURE';


export const LOGIN_USER_SUCCESS = '[LU] LOGIN_USER_SUCCESS';

export const LOGIN_USER_FAILURE = '[LU] LOGIN_USER_FAILURE';

export const LOGOUT_USER ='[LU] LOGOUT_USER';


export class LoginUser implements Action {
    readonly type = LOGIN_USER;
    constructor(public payload: any) {}
}

export class registerUserSuccess implements Action {
    readonly type = REGISTER_USER_SUCCESS;
    constructor(public payload: any) {}

}

export class registerUserFailure implements Action {
  readonly type = REGISTER_USER_FAILURE
  constructor(public payload: any) {
  }
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

export class logOutUser implements Action {
  readonly type = LOGOUT_USER;
}

export type SessionsActions = LoginUser | registerUserSuccess | registerUserFailure | loginUserSuccess | loginUserFailure | logOutUser;
