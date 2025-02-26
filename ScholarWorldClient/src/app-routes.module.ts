import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./app/landing-page/landing-page.component";
import {RegistrationComponent} from "./app/registration/registration.component";
import {LoginComponent} from "./app/login/login.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
    {path:"", component: LandingPageComponent},
    {path:"Registration", component: RegistrationComponent},
    {path:"Login", component: LoginComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutesModule {}
