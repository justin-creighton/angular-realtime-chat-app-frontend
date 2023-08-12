import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../types/types";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,private auth: AngularFireAuth
  ) { }

  getAllUsers(): Observable<User[]>{
    return new Observable<User[]>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          if(user && token) {
            this.http.get<User[]>('/api/users', this.httpOptionsWithAuthToken(token)).subscribe(users => {
              observer.next(users)
            })
          }
        })
      })
    });
  }

  getCurrentUser(): Observable<firebase.User | null>{
    return this.auth.user;
  }

  httpOptionsWithAuthToken(token: string) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authtoken: token,
      }),
    };
  }
}
