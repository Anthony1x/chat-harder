import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'ch-sidebar-top',
  templateUrl: './sidebar-top.component.html',
  styleUrls: ['./sidebar-top.component.scss']
})
export class SidebarTopComponent implements OnInit {

  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
