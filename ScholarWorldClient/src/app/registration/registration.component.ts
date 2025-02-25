import { Component } from '@angular/core';
import {RegistrationService} from "../store/service/registration.service";
import {Store} from "@ngrx/store";
import {RegisterUser} from "../store/actions/registration.actions";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    constructor(private registerService: RegistrationService, private store: Store) {
    }
    registrationData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobileNumber: '',
        gender: ''
    };

    onSubmit() {
        this.store.dispatch(new RegisterUser(this.registrationData));
    }
}
