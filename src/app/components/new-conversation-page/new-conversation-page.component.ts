import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ConversationService} from "../../services/conversation-service/conversation.service";
import {UsersService} from "../../services/users-service/users.service";
import firebase from "firebase/compat";
import {User} from "../../types/types";

@Component({
  selector: 'app-new-conversation-page',
  templateUrl: './new-conversation-page.component.html',
  styleUrls: ['./new-conversation-page.component.scss']
})
export class NewConversationPageComponent implements OnInit{
  nameValue: string = "";
  currentUser: firebase.User | null = null;
  users: User[] = [];
  memberIds: string[] = [];

  constructor(
    private router: Router,
    private conversationService: ConversationService,
    private usersService: UsersService,
  ) {
  }

  ngOnInit() {
    this.usersService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });

    this.usersService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  addMember(id: string): void {
    this.memberIds.push(id);
  }

  createConversation(): void {
    this.conversationService.createConversation(this.nameValue, this.memberIds).subscribe(newConversationId => {
      return this.router.navigateByUrl(`/conversation/${newConversationId}`)
    })
  }
}
