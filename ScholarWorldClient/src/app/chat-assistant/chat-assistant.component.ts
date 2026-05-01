import { Component } from '@angular/core';
import {ChatService} from "../store/service/chat.service";

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chat-assistant',
  templateUrl: './chat-assistant.component.html',
  styleUrl: './chat-assistant.component.css'
})
export class ChatAssistantComponent {
  isOpen = false;
  userInput = '';
  isLoading = false;
  messages: Message[] = [{
    sender: 'bot', text: 'Hi Scholar! How can I help you find resources today?'
  }];

  constructor(private chatService: ChatService) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    const userText = this.userInput;
    this.messages.push({ sender: 'user', text: userText });
    this.userInput = '';
    this.isLoading = true;

    this.chatService.sendMessage(userText).subscribe({
      next: (response) => {
        this.messages.push({ sender: 'bot', text: response.reply });
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Chat error:', error);
        this.messages.push({ sender: 'bot', text: 'Sorry, I am having trouble connecting to the server.' });
        this.isLoading = false;
      }
    });
  }
}
