import {Component, OnInit, Output} from '@angular/core'
import {ChatService, IChat} from '../chat.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'ch-chats-overview',
  templateUrl: './chats-overview.component.html',
  styleUrls: ['./chats-overview.component.scss'],
})
export class ChatsOverviewComponent implements OnInit {
  chats: IChat[] = []

  sub!: Subscription

  errorMessage = ''
  @Output() currentProfile = 0

  constructor(private chatService: ChatService) {
  }

  getProfile(id: number) {
    this.currentProfile = id
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
