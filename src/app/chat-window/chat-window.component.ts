import { Component, OnInit } from '@angular/core';
import { ChatService, IChatMessage } from '../chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ch-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class ChatWindowComponent implements OnInit {

  chatMessages: IChatMessage[] = [];

  sub!: Subscription;

  errorMessage = '';

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.sub = this.chatService.getChatMessages().subscribe({
      next: (chatMessages) => {
        console.log(chatMessages)
        this.chatMessages = chatMessages.messages;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
