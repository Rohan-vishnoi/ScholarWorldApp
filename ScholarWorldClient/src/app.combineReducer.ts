import {RegistrationState} from "./app/store/state/registration.state";
import {ActionReducerMap} from "@ngrx/store";
import {registrationReducer} from "./app/store/reducer/registration.reducer";
import {RegistrationEffects} from "./app/store/effects/registration.effects";
import {AuthState} from "./app/store/state/auth.state";
import {authReducer} from "./app/store/reducer/auth.reducer";
import {AuthEffects} from "./app/store/effects/auth.effects";
import {ProductEffects} from "./app/store/effects/product.effects";
import {ProductState} from "./app/store/state/product.state";
import {productReducer} from "./app/store/reducer/product.reducer";

export interface AppState{
  registrationState : RegistrationState,
  authState:AuthState,
  productState:ProductState
}

export const reducers: ActionReducerMap<AppState, any> = {
  registrationState : registrationReducer,
  authState:authReducer,
  productState:productReducer
}

export const effects = [
  RegistrationEffects,
  AuthEffects,
  ProductEffects
]
