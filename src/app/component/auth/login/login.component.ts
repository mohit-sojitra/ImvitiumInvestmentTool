import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  test:boolean = true;
  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(loginform: any) {
    this.test=!this.test;
    // console.log('submit');
    this.AuthService.onLogin(loginform.value.email,loginform.value.password).subscribe(res=>{
      console.log(this.AuthService.getUser());
    },error =>{
      console.log(error);
      alert(error);
    })
  }
}
