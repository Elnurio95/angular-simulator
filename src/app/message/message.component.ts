import { Component } from '@angular/core';
import { Message } from '../../enums/Message';
import { IMessage } from '../../interfaces/IMessage';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {

  messages: IMessage[] = [];
  
  private addMessage(message: Omit<IMessage, 'id'>): void {
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
