import { Component, OnDestroy } from '@angular/core';
import { AuthService } from "../../services/auth-service/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy{
  emailValue: string = '';
  passwordValue: string = '';
  subscription: any;

  constructor(public authService: AuthService) {
  }

  onClickSignIn(): void {
    this.subscription = this.authService.login(this.emailValue, this.passwordValue).subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
