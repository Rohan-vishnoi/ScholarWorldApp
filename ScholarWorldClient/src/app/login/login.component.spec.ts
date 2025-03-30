import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import * as SessionActions from '../store/actions/auth.actions';
import { AppState } from '../../app.combineReducer';
import {NavbarComponent} from "../navbar/navbar.component";
import {HttpClientModule} from "@angular/common/http";
import {MatCard} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store<AppState>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent,NavbarComponent],
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        HttpClientModule,
        MatCard,
        FormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatToolbar,
        MatIcon,
        BrowserAnimationsModule

      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to ForgetPassword on ViewForgetPassword', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.ViewForgetPassword();
    expect(navigateSpy).toHaveBeenCalledWith(['/ForgetPassword']);
  });

  it('should dispatch LoginUser action on onSubmit', () => {
    const storeSpy = spyOn(store, 'dispatch');
    component.loginData = { email: 'test@example.com', password: 'password' };
    component.onSubmit();
    expect(storeSpy).toHaveBeenCalledWith(new SessionActions.LoginUser(component.loginData));
  });
});
