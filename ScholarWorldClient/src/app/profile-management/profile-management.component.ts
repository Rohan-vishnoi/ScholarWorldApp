import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent implements OnInit {
  userName: string | undefined;
  userEmail: string | undefined;

  ngOnInit(): void {
    // Fetch user data from a service or local storage
    this.userName = 'John Doe'; // Replace with actual data
    this.userEmail = 'john.doe@example.com'; // Replace with actual data
  }
}
