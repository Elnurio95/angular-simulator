import { Component, inject } from '@angular/core';
import { IMessage } from '../../interfaces/IMessage';
import { Message } from '../../enums/Message';
import { MessageService } from '../../message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {

  messageManageService: MessageService = inject(MessageService); 
  massages$: Observable<IMessage[]> = this.messageManageService.messages$; 

}
