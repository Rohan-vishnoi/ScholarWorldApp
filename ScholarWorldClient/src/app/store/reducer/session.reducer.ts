import {initialRegistrationState, SessionState} from "../state/session.state";
import * as SessionActions from "../actions/session.actions";

export const sessionReducer = (state: SessionState = initialRegistrationState, action: SessionActions.SessionsActions) => {
  switch (action.type) {
    case SessionActions.LOGIN_USER:
      return handleLoginUser(state, action);
    default:
      return state;
  }
}

  export const handleLoginUser = (state: SessionState, action: SessionActions.LoginUser): SessionState => {
    return {
      ...state,
      sessionData: action.payload
    }
  }




