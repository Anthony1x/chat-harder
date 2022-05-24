import {Component, OnInit} from '@angular/core'
import {MenusService} from '../menus.service'

@Component({
  selector: 'ch-sidebar-top',
  templateUrl: './sidebar-top.component.html',
  styleUrls: ['./sidebar-top.component.scss']
})
export class SidebarTopComponent implements OnInit {


  ms!: MenusService

  constructor(ms: MenusService) {
    this.ms = ms
  }


  ngOnInit(): void {
  }

}
