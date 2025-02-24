import {Action} from "@ngrx/store";

export const REGISTER_USER = '[RU] REGISTER_USER';


export class RegisterUser implements Action {
    readonly type = REGISTER_USER;
    constructor(public payload: any) {}
}


export type RegistrationActions = RegisterUser;
