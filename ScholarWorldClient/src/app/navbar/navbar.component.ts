import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchQuery = '';

  constructor(private router: Router) { }


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
}
