import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {RegisterUser} from "../store/actions/registration.actions";
import {AppState} from "../../app.combineReducer";
import {Router} from "@angular/router";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    constructor( private store: Store<AppState>, private router: Router) {
    }


    registrationData = {
        fullName:'',
        email: '',
        password: ''
    };

    onSubmit() {
        this.store.dispatch(new RegisterUser(this.registrationData));
        this.router.navigate(['/Login'])
    }
}
