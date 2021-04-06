import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { AuthService } from '../../../../app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  isLoading = false;
  constructor(
    private AuthService: AuthService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private NotificationService : NotificationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data['token']);
      if (data['token']) {
        this.AuthService.verifyToken(data['token']).subscribe(
          (res) => {
            console.log(res);
            this.NotificationService.showSuccess(res,"Message");
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  onSubmit(loginform: any) {
    // console.log('submit');
    this.isLoading = true;
    this.AuthService.onLogin(
      loginform.value.email,
      loginform.value.password
    ).subscribe(
      (res) => {
        this.isLoading = false;
        console.log(this.AuthService.getUser());
        if (res.register.type === 'admin') {
          this.route.navigate(['/admin']);
        } else {
          this.route.navigate(['/edituser']);
        }
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
        alert(error);
      }
    );
  }
}
