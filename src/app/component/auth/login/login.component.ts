import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  isLoading = false;
  constructor(private AuthService: AuthService,private route:Router) {}

  ngOnInit(): void {}

  onSubmit(loginform: any) {
    // console.log('submit');
    this.isLoading = true;
    this.AuthService.onLogin(loginform.value.email,loginform.value.password).subscribe(res=>{
      this.isLoading = false;
      console.log(this.AuthService.getUser());
      if(res.register.type === 'admin'){
        this.route.navigate(['/admin']);  
      }
      else {
        this.route.navigate(['/edituser']);
      }
    },error =>{
      this.isLoading = false;
      console.log(error);
      alert(error);
    })
  }
}
