import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./app/landing-page/landing-page.component";
import {RegistrationComponent} from "./app/registration/registration.component";
import {LoginComponent} from "./app/login/login.component";
import {NgModule} from "@angular/core";
import {ProfileManagementComponent} from "./app/profile-management/profile-management.component";
import {ForgetPasswordComponent} from "./app/forgetpassword/forgetpassword.component";
import {ProductCatalogComponent} from "./app/product-catalog/product-catalog.component";

export const routes: Routes = [
  {path:"", component: LandingPageComponent},
  {path:"Login", component: LoginComponent},
  {path:"Registration", component: RegistrationComponent},
  {path:"ProfileManagement", component: ProfileManagementComponent},
  {path:"forgetpassword", component: ForgetPasswordComponent},
  {path:"product-catalog", component: ProductCatalogComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutesModule {}
