import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  newPassword:string;
  oldPassword:string;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onChangePassword(changePasswordForm : any){
    this.oldPassword = changePasswordForm.value.opassword;
    this.newPassword = changePasswordForm.value.password;
    this.authService.changePassword(this.oldPassword,this.newPassword).subscribe(res=>{
      console.log(res);
      
    },error=>{
      console.log(error);
      
    });
    
  }

}
