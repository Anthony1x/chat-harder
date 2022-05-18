import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-chats-overview',
  templateUrl: './chats-overview.component.html',
  styleUrls: ['./chats-overview.component.scss'],
})
export class ChatsOverviewComponent implements OnInit {
  items: Chat[] = [
    {
      id: 1,
      image: 'assets/img/cover5.jpg',
      chatterName: 'Drug Dealer A',
      lastMessage: 'Ha',
      date: 'yesterday',
    },
    {
      id: 2,
      image: 'assets/img/cover5.jpg',
      chatterName: 'Drug Dealer B',
      lastMessage: 'Wanna play Mario Kart?',
      date: '2 years ago',
    },
    {
      id: 3,
      image: 'assets/img/cover5.jpg',
      chatterName: 'Drug Dealer C',
      lastMessage: 'kys',
      date: '3 years ago',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getInfo(item: Chat): Chat {
    return item;
  }
}

interface Chat {
  id: number;
  image: string;
  chatterName: string;
  lastMessage: string;
  date: string;
}
