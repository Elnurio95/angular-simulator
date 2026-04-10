import { Injectable } from "@angular/core";
import { IMessage } from "./interfaces/IMessage";
import { Message } from "./enums/Message";

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: IMessage[] = [];

  addMessage(message: Omit<IMessage, 'id'>): void {
    const messageWithId: IMessage = {
      ...message,
      id: Date.now(),
    };

    this.messages = [...this.messages, messageWithId]
  }

  closeMessage(id: number): void {
    this.messages = this.messages.filter(
      (message: IMessage) => message.id !== id
    );
  }

  showSuccess(message: string): void {
    this.addMessage({
      message,
      type: Message.SUCCESS,
    });
  }

  showError(message: string): void {
    this.addMessage({
      message,
      type: Message.ERROR,
    });
  }

  showInfo(message: string): void {
    this.addMessage({
      message,
      type: Message.INFO,
    });
  }

  showWarn(message: string): void {
    this.addMessage({
      message,
      type: Message.WARN,
    });
  }
}