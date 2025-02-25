import { Component } from '@angular/core';
import {RegistrationService} from "../store/service/registration.service";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    constructor(private registerService: RegistrationService) {
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
        this.registerService.registerUser(this.registrationData);
    }
}
