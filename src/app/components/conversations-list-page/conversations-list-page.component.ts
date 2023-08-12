import {Component, OnInit} from '@angular/core';
import {ConversationService} from "../../services/conversation-service/conversation.service";
import {Conversation} from "../../types/types";

@Component({
  selector: 'app-conversations-list-page',
  templateUrl: './conversations-list-page.component.html',
  styleUrls: ['./conversations-list-page.component.scss']
})
export class ConversationsListPageComponent implements OnInit {
  isLoading: boolean = true;
  conversations: Conversation[] = [];

  constructor(private conversationService: ConversationService) {
  }

  ngOnInit() {
    this.conversationService.loadUserConversations().subscribe(conversations => {
      this.conversations = conversations;
      this.isLoading = false;
    });
  }
}
