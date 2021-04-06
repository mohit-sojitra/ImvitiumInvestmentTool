import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit(ContactForm) {
    this.authService
      .OnForgetPassword(ContactForm.value.name)
      .subscribe((res) => {
        console.log(res);
        this.notificationService.showInfo(res, '');
        this.router.navigate(['/']);
      });
  }
}
