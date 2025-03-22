import {initialRegistrationState, AuthState} from "../state/auth.state";
import * as SessionActions from "../actions/auth.actions";
import {registerUserSuccess} from "../actions/auth.actions";

export const authReducer = (state: AuthState = initialRegistrationState, action: SessionActions.SessionsActions) => {
  switch (action.type) {
    case SessionActions.LOGIN_USER:
      return handleLoginUser(state, action);
      case SessionActions.LOGIN_USER_SUCCESS:
        return handleLoginUserSuccess(state, action);
    case SessionActions.REGISTER_USER_SUCCESS:
      return handleUserRegistrationSuccess(state, action);
    case SessionActions.LOGOUT_USER:
      return handleLogOutUser(state, action);
    default:
      return state;
  }
}

  export const handleLoginUser = (state: AuthState, action: SessionActions.LoginUser): AuthState => {
    return {
      ...state,
      loginData: action.payload
    }
  }

  export const handleLoginUserSuccess = (state: AuthState, action: SessionActions.loginUserSuccess): AuthState => {
    return {
      ...state,
      authData: action.payload.payload
    }
  }

    export const handleUserRegistrationSuccess = (state: AuthState, action: SessionActions.registerUserSuccess): AuthState => {
      return {
        ...state,
        sessionData: action.payload
      }
    }

    export const handleLogOutUser = (state: AuthState, action: SessionActions.logOutUser): AuthState => {
      return {
        ...state,
        authData: initialRegistrationState.authData
      }
  }




