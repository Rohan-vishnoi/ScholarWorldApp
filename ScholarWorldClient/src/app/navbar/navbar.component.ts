import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.combineReducer";
import {Subject, takeUntil} from "rxjs";
import {logOutUser} from "../store/actions/auth.actions";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchQuery = '';

  private unsubscribe$ = new Subject<void>();

  constructor(private router: Router, private store: Store<AppState>) { }


  isLoginButton:boolean = true;

  ngOnInit() {
    this.store.select((state) => state.authState.authData)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((authData) => {
        if (authData.token) {
          this.isLoginButton = false;
          this.router.navigate(['']);
        } else {
          this.isLoginButton = true;
          this.router.navigate(['Login']);
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  showRegistrationPageView = ():any => {
    this.router.navigate(['/Registration']);
  }

  navigateToHomeScreen = (): any =>{
    this.router.navigate(['']);
  }

  showLoginPageView = (): any => {
    this.router.navigate(['/Login']);
  }

  showProfileManagementView = (): any => {
    this.router.navigate(['/ProfileManagement']);
  }

  logout = (): any => {
    this.store.dispatch(new logOutUser());
  }

  showCartView = (): any => {
      this.router.navigate(['/cart']);
  }
}
