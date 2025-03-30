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
    this.userName = 'John Doe';
    this.userEmail = 'john.doe@example.com';
  }
}
