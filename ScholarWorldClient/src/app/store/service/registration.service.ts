// registration.service.ts
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {RegistrationState} from "../state/registration.state";
import {RegisterUser} from "../actions/registration.actions";

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    constructor(private store: Store<{ registration: RegistrationState }>) { }

    registerUser(registrationData: any) {
        this.store.dispatch(new RegisterUser(registrationData));
    }
}