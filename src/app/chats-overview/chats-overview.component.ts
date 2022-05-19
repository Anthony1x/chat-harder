import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {ChatService, IChat} from '../chat.service'
import {Subscription} from 'rxjs'
import {ChatWindowComponent} from '../chat-window/chat-window.component'

@Component({
  selector: 'ch-chats-overview',
  templateUrl: './chats-overview.component.html',
  styleUrls: ['./chats-overview.component.scss'],
})
export class ChatsOverviewComponent implements OnInit {
  chats: IChat[] = []

  sub!: Subscription

  errorMessage = ''

  @Output() newItemEvent = new EventEmitter<number | undefined>();


  constructor(public chatService: ChatService) {
  }


  ngOnInit(): void {
    this.sub = this.chatService.getChatters().subscribe({
      next: (chats) => {
        this.chats = chats
      },
      error: (err) => (this.errorMessage = err),
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
