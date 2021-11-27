import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { OutgoingChat } from '../OutgoingChat';

@Component({
	selector: 'app-ChatComposer',
	templateUrl: './ChatComposer.component.html',
	styleUrls: ['./ChatComposer.component.css']
})
export class ChatComposerComponent implements OnInit {
	
	private _myMessage:string = ''

	set myMessage(message:string) {
		this._myMessage = message;
	}
	
	constructor(private chatService: ChatService) {
	}

	ngOnInit() {
	}

	sendMessage() {
		console.log("Sending chat")
		this.chatService.send(new OutgoingChat(this._myMessage))
	}
}
