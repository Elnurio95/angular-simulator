import { Component, inject } from '@angular/core';
import { IMessage } from '../../interfaces/IMessage';
import { MessageService } from '../../message.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {

  messageManageService: MessageService = inject(MessageService); 
  massages$: Observable<IMessage[]> = this.messageManageService.messages$; 

  closeMessage(index: number): void {
    this.messageManageService.closeMessage(index); 
  }

}
