import { Component, Input, OnInit } from '@angular/core';
import { ChatService, IChatMessage } from '../chat.service';
import { Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'ch-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class ChatWindowComponent implements OnInit {
  chatMessages: IChatMessage[] = [];

  sub?: Subscription;

  errorMessage = '';

  @Input() set chatId(chatId: number) {
    this.sub?.unsubscribe();

    this.sub = this.chatService.getChatMessages(chatId).subscribe({
      next: (chatMessages) => {
        console.log(chatMessages);
        this.chatMessages = chatMessages.messages;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('sdfjkldsjf');
    this.sub!.unsubscribe();
  }
}
