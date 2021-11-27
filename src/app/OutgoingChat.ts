export class OutgoingChat {
    type:string = 'chat'
    content:string = ''

    constructor(message:string) {
        this.content = message
    }

}
