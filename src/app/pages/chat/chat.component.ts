import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  msgList = [];
  constructor(private msgS: MessagesService) {
  }

  ngOnInit(): void {
    this.msgS.getAllMessages(1).subscribe((res: any) => {
      this.msgList = res.data;
    })
  }


  name = '';
  handleForm() {

  }
}
