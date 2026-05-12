import { Injectable } from '@angular/core';
import { IMessage } from './interfaces/IMessage';
import { Message } from './enums/Message';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  private messagesSubject: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>([]);

  messages$: Observable<IMessage[]> = this.messagesSubject.asObservable();

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

  closeMessage(id: number): void {
    this.messagesSubject.next(
      this.messagesSubject.value.filter((message: IMessage) => message.id !== id),
    );
  }

  private addMessage(message: string, type: string): void {
    const newMessage: IMessage = {
      id: Date.now(),
      message,
      type,
    };

    this.messagesSubject.next([...this.messagesSubject.value, newMessage]);

    setTimeout(() => {
      this.closeMessage(newMessage.id);
    }, 3000);
  }
  
}
