import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { FIREBASE_OPTIONS } from "@angular/fire/compat";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from "@angular/fire/firestore";
import {firebaseConfig} from './configs/firebase-config';
import { ConversationsListPageComponent } from './components/conversations-list-page/conversations-list-page.component';
import { NewConversationPageComponent } from './components/new-conversation-page/new-conversation-page.component';
import { ConversationPageComponent } from './components/conversation-page/conversation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ConversationsListPageComponent,
    NewConversationPageComponent,
    ConversationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    provideFirebaseApp(
      () => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore(),
    ),
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: firebaseConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
