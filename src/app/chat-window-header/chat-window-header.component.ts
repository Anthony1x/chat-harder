import {Component, OnInit} from '@angular/core'
import {Subscription} from 'rxjs'
import {MenusService} from '../menus.service'
import {ChatService} from '../chat.service'

@Component({
  selector: 'ch-chat-window-header',
  templateUrl: './chat-window-header.component.html',
  styleUrls: ['./chat-window-header.component.scss']
})
export class ChatWindowHeaderComponent implements OnInit {


  sub?: Subscription

  ms!: MenusService
  a!: ChatService

  chatterName: string = 'Drug Dealer A'

  constructor(ms: MenusService, a: ChatService) {
    this.ms = ms
    this.a = a
  }

  ngOnInit(): void {
  }

}
