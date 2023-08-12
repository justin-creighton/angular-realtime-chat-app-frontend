import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConversationService} from "../../services/conversation-service/conversation.service";
import {Socket} from 'socket.io-client';
import {Message} from "../../types/types";

@Component({
  selector: 'app-conversation-page',
  templateUrl: './conversation-page.component.html',
  styleUrls: ['./conversation-page.component.scss']
})
export class ConversationPageComponent implements OnInit, OnDestroy{
  messageInputValue: string = '';
  messages: Message[] = [];
  socketConnection!: Socket;

  constructor(
    private route: ActivatedRoute,
    private conversationService: ConversationService,
  ) {
  }

  ngOnInit() {
    const conversationId = this.route.snapshot.params['conversationId'];
    this.conversationService.getConversationSocketConnection(conversationId).subscribe(socket => {
      this.socketConnection = socket;
      this.socketConnection.on('initialMessages', messages => {
        this.messages = messages;
      })

      this.socketConnection.on('updatedMessages', messages => {
        this.messages = messages;
      })
    });
  }

  ngOnDestroy() {
    this.socketConnection.disconnect();
  }

  postMessage() {
    const conversationId = this.route.snapshot.params['conversationId'];
    this.socketConnection.emit('postMessage', {
      text: this.messageInputValue,
      conversationId,
    });
    this.messageInputValue = '';
  }
}
