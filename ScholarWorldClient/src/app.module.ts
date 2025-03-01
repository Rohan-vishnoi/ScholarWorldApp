import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutesModule } from "./app-routes.module";
import { RegistrationComponent } from "./app/registration/registration.component";
import { ForgetPasswordComponent } from "./app/forgetpassword/forgetpassword.component";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./app/navbar/navbar.component";
import { LandingPageComponent } from "./app/landing-page/landing-page.component";
import { LoginComponent } from "./app/login/login.component";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatToolbar } from "@angular/material/toolbar";
import { MatButton } from "@angular/material/button";
import { MatInput } from "@angular/material/input";
import { MatCard, MatCardContent, MatCardImage } from "@angular/material/card";
import { MatRadioButton, MatRadioGroup } from "@angular/material/radio";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegistrationService } from "./app/store/service/registration.service";
import { provideHttpClient } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from '@ngrx/effects';
import {effects, reducers} from "./app.combineReducer";
import {SessionService} from "./app/store/service/session.service";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    LandingPageComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    MatLabel,
    MatFormField,
    MatIcon,
    MatToolbar,
    MatButton,
    MatInput,
    MatCard,
    MatRadioButton,
    MatRadioGroup,
    MatCardContent,
    MatCardImage,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [
    RegistrationService,
    SessionService,
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
