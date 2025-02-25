import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import {RegistrationService} from "../store/service/registration.service";

@Component({
    selector: 'app-registration',
    standalone: true,
    imports: [
        NavbarComponent,
        MatCardModule,
        MatFormFieldModule,
        MatRadioModule,
        MatButtonModule,
        FormsModule,
        MatInput
    ],
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