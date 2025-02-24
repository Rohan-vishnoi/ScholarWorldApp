import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

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
        console.log('Registration Data:', this.registrationData);
    }
}