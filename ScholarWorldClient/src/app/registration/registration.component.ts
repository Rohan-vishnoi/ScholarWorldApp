import { Component } from '@angular/core';
import {RegistrationService} from "../store/service/registration.service";
import {Store} from "@ngrx/store";
import {RegisterUser} from "../store/actions/registration.actions";
import {AppState} from "../../app.combineReducer";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    constructor(private registerService: RegistrationService, private store: Store<AppState>) {
    }
    registrationData = {
        fullName:'',
        email: '',
        password: ''
    };

    onSubmit() {
        this.store.dispatch(new RegisterUser(this.registrationData));
    }
}
