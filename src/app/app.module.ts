import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {ChatsOverviewComponent} from './chats-overview/chats-overview.component'
import {ChatWindowComponent} from './chat-window/chat-window.component'
import {SearchComponent} from './search/search.component'
import {SidebarTopComponent} from './sidebar-top/sidebar-top.component'
import {ChatWindowHeaderComponent} from './chat-window-header/chat-window-header.component'
import {ChatInputComponent} from './chat-input/chat-input.component'
import {HttpClientModule} from '@angular/common/http';
import {MenusService} from './menus.service'
import {ChatService} from './chat.service'
import {ChatterInfoService} from './chatter-info.service'

@NgModule({
  declarations: [AppComponent, ChatsOverviewComponent, ChatWindowComponent, SearchComponent, SidebarTopComponent, ChatWindowHeaderComponent, ChatInputComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MenusService, ChatService, ChatterInfoService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
