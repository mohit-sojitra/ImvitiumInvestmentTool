import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { LoginModel } from 'src/app/interfaces/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public navbarOpen = false;
  public userSubscription: Subscription;
  public isLoggedIn = false;

  constructor(private AuthService: AuthService,private router:Router) {
    this.userSubscription = AuthService.LoggedInUser.subscribe((user) => {
      if(user !== null){
        console.log('1');
        
        this.isLoggedIn = true;
      }
      else {
        console.log('2');
        this.isLoggedIn = false;
      }
    });
  }
  ngOnInit(): void {}
  public toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }
  onSelect() {
    this.navbarOpen = false;
  }
  logout(){
    this.AuthService.logOut();
  }
}
