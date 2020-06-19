import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  messageList = [];// Array that will be shown in the html part [{m}]
  //It will contain messages from that chatroom
  roomId;//that  chat Room
  constructor(private ms: MessagesService, private route: ActivatedRoute, private us: UserService) { }
  getDatUser(uid) {
    return this.us.getUser(uid);
  }
  ngOnInit(): void {

    //what is chatroom id?
    this.route.paramMap.subscribe((params) => {
      this.roomId = params.get('roomId');
    });
    // what are the emssages from that room ? ->service-> API
    this.refreshChatList();
    setInterval


    refreshChatList(){
      this.ms.getAllMessage(this.roomId).subscribe((res: any) => {// it can take any name -res/response/Jey
        this.messageList = res.data;
      }
  }
  });
}
