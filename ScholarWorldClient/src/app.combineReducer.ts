import {RegistrationState} from "./app/store/state/registration.state";
import {ActionReducerMap} from "@ngrx/store";
import {registrationReducer} from "./app/store/reducer/registration.reducer";
import {RegistrationEffects} from "./app/store/effects/registration.effects";
import {AuthState} from "./app/store/state/auth.state";
import {authReducer} from "./app/store/reducer/auth.reducer";
import {AuthEffects} from "./app/store/effects/auth.effects";

export interface AppState{
  registrationState : RegistrationState,
  authState:AuthState
}

export const reducers: ActionReducerMap<AppState, any> = {
  registrationState : registrationReducer,
  authState:authReducer,
}

export const effects = [
  RegistrationEffects,
  AuthEffects
]
