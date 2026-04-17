import { Injectable } from '@angular/core';
import { IMessage } from './interfaces/IMessage';
import { Message } from './enums/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: IMessage[] = [];

  showSuccess(message: string): void {
    this.addMessage(message, Message.SUCCESS);
  }

  showError(message: string): void {
    this.addMessage(message, Message.ERROR);
  }

  showWarn(message: string): void {
    this.addMessage(message, Message.WARN);
  }

  showInfo(message: string): void {
    this.addMessage(message, Message.INFO);
  }

  closeMessage(index: number): void {
    this.messages.filter((_, i) => i !== index)
  }

  private addMessage(message: string, type: string) : void {
    const newMessage: IMessage = {
      id: Date.now(),
      message,
      type
    };

    this.messages = [...this.messages, newMessage]

    setTimeout(() => {
      this.messages = this.messages.filter(m => m.id !== newMessage.id);
    }, 3000);
  }
  
}