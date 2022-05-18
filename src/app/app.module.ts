import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatsOverviewComponent } from './chats-overview/chats-overview.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { SearchComponent } from './search/search.component';
import { SidebarTopComponent } from './sidebar-top/sidebar-top.component';
import { ChatWindowHeaderComponent } from './chat-window-header/chat-window-header.component';

@NgModule({
  declarations: [AppComponent, ChatsOverviewComponent, ChatWindowComponent, SearchComponent, SidebarTopComponent, ChatWindowHeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
