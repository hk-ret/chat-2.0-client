export class ChatMessage {

    constructor(sender:string = '', time:string = '', content:string = '', number:number = 0) {
        this.sender = sender;
        this.time = time
        this.content = content
        this.number = number
    }

    sender:string = ''
    time:string = ''
    content:string = ''
    number:number = 0
}
