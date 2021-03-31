import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { UserModel } from '../../../../app/interfaces/user.model';
import { AuthService } from '../../../../app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  isLoading = false;
  

  constructor(private http: HttpClient, private AuthService: AuthService,private NotificationService:NotificationService,private route:Router) {}

  ngOnInit(): void {}

  onSubmit(loginForm) {
    let user: UserModel;
    user = {
      name: loginForm.value.name,
      email: loginForm.value.email,
      password: loginForm.value.password,
      username: loginForm.value.username,
    };
    console.log(user);
    this.isLoading = true;
    this.AuthService.onRegister(user).subscribe((res) => {
      this.isLoading = false;
      console.log(res);
      this.NotificationService.showSuccess('Success',res);
      this.route.navigate(['/auth/login']);
    },error=>{
      this.isLoading = false;
      this.NotificationService.showError('error','Email or password has been taken')  
    });
  }
}
