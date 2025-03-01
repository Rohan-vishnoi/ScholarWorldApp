import {initialRegistrationState, AuthState} from "../state/auth.state";
import * as SessionActions from "../actions/auth.actions";

export const authReducer = (state: AuthState = initialRegistrationState, action: SessionActions.SessionsActions) => {
  switch (action.type) {
    case SessionActions.LOGIN_USER:
      return handleLoginUser(state, action);
    default:
      return state;
  }
}

  export const handleLoginUser = (state: AuthState, action: SessionActions.LoginUser): AuthState => {
    return {
      ...state,
      sessionData: action.payload
    }
  }




