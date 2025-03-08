import { Component } from '@angular/core';
import * as SessionActions from "../store/actions/auth.actions";
import {AppState} from "../../app.combineReducer";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private store: Store<AppState>, private router: Router) {}

  loginData = {
    email: '',
    password: ''
  };

  ViewForgetPassword() {
    this.router.navigate(['/ForgetPassword']);
  }

  onSubmit() {
    this.store.dispatch(new SessionActions.LoginUser(this.loginData));
  }
}
