import { Injectable } from '@angular/core';
import { IMessages } from './interfaces/IMessages';

@Injectable()
export class ManageMessageService {
  messages: IMessages[] = [];

  addMessage(message: IMessages): void {
    const messageWithId: IMessages = {
      ...message,
      id: message.id || Date.now(),
    };

    this.messages = [...this.messages, messageWithId];

    setTimeout(() => {
      this.closeMessage(messageWithId.id);
    }, 5000);
  }

  closeMessage(id: number): void {
    this.messages = this.messages.filter(
      (message) => message.id !== id
    );
  }
}