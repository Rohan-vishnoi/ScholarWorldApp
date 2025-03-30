import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { RegistrationComponent } from './registration.component';
import * as RegistrationActions from '../store/actions/registration.actions';
import { AppState } from '../../app.combineReducer';
import { FormsModule } from '@angular/forms';
import {NavbarComponent} from "../navbar/navbar.component";
import {HttpClientModule} from "@angular/common/http";
import {MatCard} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatToolbar} from "@angular/material/toolbar";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent,NavbarComponent],
      imports: [
        StoreModule.forRoot({}),
        FormsModule,
        HttpClientModule,
        MatCard,
        MatFormField,
        MatLabel,
        MatToolbar,
        MatInput,
        MatIcon,
        BrowserDynamicTestingModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch RegisterUser action on onSubmit', () => {
    const storeSpy = spyOn(store, 'dispatch');
    component.registrationData = { fullName: 'Test User', email: 'test@example.com', password: 'password' };
    component.onSubmit();
    expect(storeSpy).toHaveBeenCalledWith(new RegistrationActions.RegisterUser(component.registrationData));
  });
});
