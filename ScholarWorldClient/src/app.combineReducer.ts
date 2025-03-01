import {RegistrationState} from "./app/store/state/registration.state";
import {ActionReducerMap} from "@ngrx/store";
import {registrationReducer} from "./app/store/reducer/registration.reducer";
import {RegistrationEffects} from "./app/store/effects/registration.effects";

export interface AppState{
  registrationState : RegistrationState
}

export const reducers: ActionReducerMap<AppState, any> = {
  registrationState : registrationReducer
}

export const effects = [
  RegistrationEffects
]
