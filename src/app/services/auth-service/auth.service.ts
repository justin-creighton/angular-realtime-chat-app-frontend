import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { Router } from "@angular/router";
import { AngularFireAuth, } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  errorMessage: string = "";

  constructor(private router: Router, public auth: AngularFireAuth) {

  }

  public login(email: string, password: string) {
    return new Observable<boolean>((subscriber) => {
      this.auth.signInWithEmailAndPassword(email, password).then((user) => {
        subscriber.next(true);
        return this.router.navigateByUrl('/conversations');
      }).catch(e => {
        this.errorMessage = e.message;
        subscriber.next(false);
        return this.router.navigateByUrl('/login')
      })
    });
  }

  public signOut() {
    this.auth.signOut().then(() => {
      return this.router.navigateByUrl('/')
    })
  }

  public canAccess(userIsLoggedIn: boolean, redirectPath: string) {
    this.auth.authState.pipe(map(user => {
      if (!!user === userIsLoggedIn) {
        return true;
      }

      this.router.parseUrl(redirectPath);
      return false;
    }));
  }
}
