import {Action} from "@ngrx/store";

export const REGISTER_USER = '[RU] REGISTER_USER';

export const REGISTER_USER_SUCCESS = '[RU] REGISTER_USER_SUCCESS';

export const REGISTER_USER_FAILURE = '[RU] REGISTER_USER_FAILURE';

export class RegisterUser implements Action {
    readonly type = REGISTER_USER;
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


export type RegistrationActions = RegisterUser | registerUserSuccess | registerUserFailure;
