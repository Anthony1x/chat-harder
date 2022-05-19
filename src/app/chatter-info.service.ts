import {Injectable, Output} from '@angular/core'
import {ChatService} from './chat.service'

@Injectable({
  providedIn: 'root'
})
export class ChatterInfoService {



  constructor(private chatService: ChatService) {
  }
}
