import {RegistrationState} from "./app/store/state/registration.state";
import {ActionReducerMap} from "@ngrx/store";
import {registrationReducer} from "./app/store/reducer/registration.reducer";
import {RegistrationEffects} from "./app/store/effects/registration.effects";
import {SessionState} from "./app/store/state/session.state";
import {sessionReducer} from "./app/store/reducer/session.reducer";

export interface AppState{
  registrationState : RegistrationState,
  sessionState:SessionState
}

export const reducers: ActionReducerMap<AppState, any> = {
  registrationState : registrationReducer,
  sessionState:sessionReducer
}

export const effects = [
  RegistrationEffects
]
