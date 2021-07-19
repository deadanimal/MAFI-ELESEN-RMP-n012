import { Component, OnInit, ViewChild } from '@angular/core';

import {
  LiveChatWidgetModel,
  LiveChatWidgetApiModel,
} from "@livechat/angular-widget";

const FC_TOKEN = "66be7290-cfe1-4a79-93b5-f76fb00c8b37"
const FC_URL = "https://wchat.freshchat.com"

@Component({
  selector: 'app-iservice-faq',
  templateUrl: './iservice-faq.component.html',
  styleUrls: ['./iservice-faq.component.scss']
})
export class IserviceFaqComponent implements OnInit {

  public isLiveChatWidgetLoaded: boolean = false;
  public liveChatApi: LiveChatWidgetApiModel;

  @ViewChild("liveChatWidget", { static: false })
  public liveChatWidget: LiveChatWidgetModel;
  
  constructor() { }

  onChatLoaded(api: LiveChatWidgetApiModel): void {
    this.liveChatApi = api;
    this.isLiveChatWidgetLoaded = true;

    // Sometimes it can happen that LC_Invite is is still being loaded when onChatLoaded is called. To ensure that LC_Invite is loaded you can give additional check to onChatLoaded function:
    // api.on_after_load = () => {
    //   this.liveChatApi = api;
    //   this.isLiveChatWidgetLoaded = true;
    // };
  }

  onChatWindowMinimized() {
    console.log("minimized");
  }

  onChatWindowOpened() {
    console.log("opened");
  }

  openChatWindow(): void {
    if (this.isLiveChatWidgetLoaded) {
      this.liveChatWidget.openChatWindow();

      // You can also use methods directly on liveChatApi instance
      // for more details plese read our documentation
      // https://developers.livechatinc.com/docs/extending-ui/extending-chat-widget/javascript-api/#methods
      // this.liveChatApi.open_chat_window();
    }
  }

  hideChatWindow() {
    if (this.isLiveChatWidgetLoaded) {
      this.liveChatWidget.minimizeChatWindow();

      // You can also use methods directly on liveChatApi instance
      // for more details plese read our documentation
      // https://developers.livechatinc.com/docs/extending-ui/extending-chat-widget/javascript-api/#methods
      // this.liveChatApi.minimize_chat_window();
    }
  }
  
  ngOnInit() {
  }

}
