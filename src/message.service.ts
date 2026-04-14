import { Injectable } from '@angular/core';
import { IMessage } from './interfaces/IMessage';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: IMessage[] = [];

  private addMessage(message: string, type: string) : void {
    const newMessage: IMessage = {
      id: Date.now(),
      message,
      type
    };

    this.messages.push(newMessage);

    setTimeout(() => {
      this.messages = this.messages.filter(m => m.id !== newMessage.id);
    }, 3000);
  }

  showSuccess(message: string): void {
    this.addMessage(message, 'success');
  }

  showError(message: string): void {
    this.addMessage(message, 'error');
  }

  showWarn(message: string): void {
    this.addMessage(message, 'warn');
  }

  showInfo(message: string): void {
    this.addMessage(message, 'info');
  }

  closeMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}