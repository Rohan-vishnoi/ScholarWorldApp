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
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatToolbar } from "@angular/material/toolbar";
import { MatButton } from "@angular/material/button";
import { MatInput } from "@angular/material/input";
import {
  MatCard,
  MatCardContent,
  MatCardImage,
  MatCardModule,
} from "@angular/material/card";
import { MatRadioButton, MatRadioGroup } from "@angular/material/radio";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegistrationService } from "./app/store/service/registration.service";
import {HTTP_INTERCEPTORS, provideHttpClient} from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from '@ngrx/effects';
import {effects, reducers} from "./app.combineReducer";
import {AuthService} from "./app/store/service/auth.service";
import {JwtInterceptor, JwtModule} from "@auth0/angular-jwt";
import { ProfileManagementComponent } from './app/profile-management/profile-management.component';
import { ProductCatalogComponent } from './app/product-catalog/product-catalog.component';
import {CartComponent} from "./app/cart/cart.component";

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    LandingPageComponent,
    LoginComponent,
    NavbarComponent,
    ProfileManagementComponent,
    ProductCatalogComponent,
    CartComponent
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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:8000'],
        disallowedRoutes: ['http://localhost:8000/auth/login']
      }
    }),
    StoreDevtoolsModule.instrument(),
    MatCardModule,
    MatError
  ],
  providers: [
    RegistrationService,
    AuthService,
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
