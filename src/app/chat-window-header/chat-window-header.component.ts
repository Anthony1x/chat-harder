import {Component, OnInit} from '@angular/core'
import {Subscription} from 'rxjs'
import {ChatService} from '../chat.service'

@Component({
  selector: 'ch-chat-window-header',
  templateUrl: './chat-window-header.component.html',
  styleUrls: ['./chat-window-header.component.scss']
})
export class ChatWindowHeaderComponent implements OnInit {


  chatterName: string = 'Placeholder'

  sub?: Subscription


  constructor(public chatService: ChatService) {

  }

  ngOnInit(): void {
  }

}
