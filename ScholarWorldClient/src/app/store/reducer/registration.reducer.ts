import {initialState, RegistrationState} from "../state/registration.state";
import * as RegistrationActions from "../actions/registration.actions";

export const registrationReducer = (state: RegistrationState = initialState , action: RegistrationActions.RegistrationActions) => {
    switch (action.type) {
        case RegistrationActions.REGISTER_USER:
            return handleRegisterUser(state, action);
        default:
            return state;
    }
}

export const handleRegisterUser=(state: RegistrationState, action: RegistrationActions.RegisterUser): RegistrationState => {
    return {
        ...state,
        registrationData: action.payload
    }
}

