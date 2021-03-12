import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from '../../../../app/interfaces/user.model';
import { AuthService } from '../../../../app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient, private AuthService: AuthService) {}

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
    this.AuthService.onRegister(user).subscribe((res) => {
      console.log(res);
    },error=>{
      console.log(error);
      alert(error);
    });
  }
}
