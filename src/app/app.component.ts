import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ChatService } from './chat.service';
import { ChatMessage } from './ChatMessage';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'gachoChat';
	messages:ChatMessage[] = []

	constructor(private chatService: ChatService) {
		this.messages.push(new ChatMessage('Gacho','','Chat gestartet'))
	}

	users:string = ''
	actions:string = ''

	ngOnInit() {
		this.chatService.connectGachoChat()
		.subscribe({
			next:		message => this.parseMessage(message),
			error: 		error => console.error(error),
			complete:	() => console.warn("Chat server called complete")
		})
	}

	parseMessage(message:any) {
		console.log("Message received");
		console.log(message)
		switch (message.type) {
			case 'users':
				this.users = message.content.toString();
				break;
			case 'joined':
			case 'left':
				this.actions =('User ' + message.content.toString() + ' ' + message.type)
				break;
			case 'action':
				this.actions = ('User ' + message.content.toString() + ' pressed Action!')
				let msg = new ChatMessage(message.user,message.time,message.text)
				this.messages.push(msg)
				this.messages.sort((a,b) => a.number > b.number? -1 : 1)
				break;
			case 'chat':
				let chat = new ChatMessage(message.content.user,message.content.time,message.content.text)
				this.messages.push(chat)
				this.messages.sort((a,b) => a.number > b.number? -1 : 1)
				break;
				default:
				console.warn("unsupported event", message);
	
		}
	}

	onAction() {
		console.log("Action!")
		let action = new ActionObject;
		action.content = "action";
		this.chatService.send(action)
	}
}

class ActionObject {

	type:string = "chat"
	content:string = ""
}


/*
        websocket.onmessage = function (event) {
            data = JSON.parse(event.data);
            switch (data.type) {
                case 'users':
                    users.textContent = (data.users);
                    break;
                case 'joined':
                case 'left':
                    actions.textContent = ('User ' + data.action.toString() + ' ' + data.type)
                    break;
                case 'action':
                    actions.textContent = ('User ' + data.action.toString() + ' pressed Action!')
                    break;
                default:
                    console.error(
                        "unsupported event", data);
            }
*/