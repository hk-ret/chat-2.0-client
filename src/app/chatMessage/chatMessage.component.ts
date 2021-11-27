import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from '../ChatMessage';

@Component({
  selector: 'app-chatMessage',
  templateUrl: './chatMessage.component.html',
  styleUrls: ['./chatMessage.component.css']
})
export class ChatMessageComponent implements OnInit {

  constructor() {
    //Initialize with a blank message
    this.myMessage = new ChatMessage()
  }

  ngOnInit() {
  }

   @Input() myMessage: ChatMessage;

}
