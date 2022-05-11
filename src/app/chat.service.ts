import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class ChatService {

	constructor() { }

	connection$?: WebSocketSubject<any>;
	GACHOCHAT_ENDPOINT = 'wss://chat-ws.gacho.duckdns.org:16788/'

	connectGachoChat() {
		return this.connect(this.GACHOCHAT_ENDPOINT)
	}

	connect(endpoint: string): Observable<any> {
		// If no connection object has been created yet, return a new connection
		if (!this.connection$) this.connection$ = webSocket(endpoint);
		return this.connection$;
	}

	send(data: Object) {
		console.log("Sending message")
		console.log(data)
		if (this.connection$) {
			this.connection$.next(data);
		} else {
			console.error('Connection has not been created, cannot send ' + String(data))
		}
	}

	closeConnection() {
		if (this.connection$) {
			this.connection$.complete();
			delete this.connection$;
		}
		else {
			console.log("Tried to close connection, but no connection exists. ")
		}
	}

}
