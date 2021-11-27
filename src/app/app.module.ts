import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatMessageComponent } from './chatMessage/chatMessage.component';
import { ChatComposerComponent } from './ChatComposer/ChatComposer.component';

@NgModule({
	declarations: [			
		AppComponent,
		ChatMessageComponent,
		ChatComposerComponent
	 ],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
