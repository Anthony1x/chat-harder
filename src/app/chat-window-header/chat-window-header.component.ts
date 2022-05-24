import {Component, OnInit} from '@angular/core'
import {Subscription} from 'rxjs'
import {MenusService} from '../menus.service'

@Component({
  selector: 'ch-chat-window-header',
  templateUrl: './chat-window-header.component.html',
  styleUrls: ['./chat-window-header.component.scss']
})
export class ChatWindowHeaderComponent implements OnInit {


  chatterName: string = 'Placeholder'

  sub?: Subscription

  ms!: MenusService

  constructor(ms: MenusService) {
    this.ms = ms
  }

  ngOnInit(): void {
  }

}
