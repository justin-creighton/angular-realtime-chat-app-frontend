import {inject, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {ConversationsListPageComponent} from "./components/conversations-list-page/conversations-list-page.component";
import {AuthService} from "./services/auth-service/auth.service";
import {NewConversationPageComponent} from "./components/new-conversation-page/new-conversation-page.component";
import {ConversationPageComponent} from "./components/conversation-page/conversation-page.component";

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'conversations',
    component: ConversationsListPageComponent,
    canActivate: [
      () => inject(AuthService).canAccess(true, "/"),
    ]
  },
  {
    path: 'conversation/:conversationId',
    component: ConversationPageComponent,
    canActivate: [
      () => inject(AuthService).canAccess(true, "/"),
    ]
  },
  {
    path: 'new-conversation',
    component: NewConversationPageComponent,
    canActivate: [
      () => inject(AuthService).canAccess(true, "/"),
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
