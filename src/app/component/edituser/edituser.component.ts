import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { newsModel } from 'src/app/interfaces/news.model';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EdituserComponent implements OnInit {
  newsList: newsModel[] = [];
  @ViewChild('userForm') UserEditForm: NgForm;
  constructor(
    private adminService: AdminService,
    private authService: AuthService,
    private userService: UserService,
    private NotificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.adminService.getUpdates().subscribe((res) => {
      this.newsList = res;
    });
    this.loadUser();
  }

  onSubmit(userForm) {
    this.userService
      .updateUserdata(
        this.authService.LoggedInUser.value.register.id,
        userForm.value.email,
        userForm.value.username
      )
      .subscribe(
        (res) => {
          this.NotificationService.showSuccess('user updates', res);
        },
        (error) => {
          this.NotificationService.showError('Error', error);
        }
      );
  }

  loadUser() {
    setTimeout(() => {
      this.UserEditForm.setValue({
        email: this.authService.LoggedInUser.value.register.email,
        paymethod: 'card',
        username: this.authService.LoggedInUser.value.register.username,
        renewdate: 'undefined',
      });
    });
  }
}
