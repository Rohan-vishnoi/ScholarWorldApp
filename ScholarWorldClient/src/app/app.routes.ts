import { Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
    {path:"", component: LandingPageComponent},
    {path:"Registration", component: RegistrationComponent},
    {path:"Login", component: LoginComponent}
];
