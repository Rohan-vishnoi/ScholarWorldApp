import {RegistrationState} from "./store/state/registration.state";
import {ActionReducerMap} from "@ngrx/store";
import {registrationReducer} from "./store/reducer/registration.reducer";
import {RegistrationEffects} from "./store/effects/registration.effects";

export interface AppState{
  registrationState : RegistrationState
}

export const reducers: ActionReducerMap<AppState, any> = {
  registrationState : registrationReducer
}

export const effects = [
  RegistrationEffects
]
