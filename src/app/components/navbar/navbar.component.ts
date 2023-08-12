import { Component } from '@angular/core';
import { AuthService } from "../../services/auth-service/auth.service";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    public authService: AuthService,
    public auth: AngularFireAuth
  ) {
  }

  onClickSignOut() {
    this.authService.signOut();
  }
}
