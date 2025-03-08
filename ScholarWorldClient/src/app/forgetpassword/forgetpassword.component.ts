import { Component } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetPasswordComponent {
  forgetPasswordData = {
    newPassword: '',
    confirmPassword: ''
  };

  onSubmit() {
    // Call a service to handle the password reset logic
    console.log('New Password:', this.forgetPasswordData.newPassword);
    console.log('Confirm Password:', this.forgetPasswordData.confirmPassword);
  }
}
