import { Injectable } from '@angular/core';
import { IMessages } from './Interfaces/IMessages';

@Injectable() 
export class ManageMessageService {
  public messages: IMessages[] = []; 

  public addMessage(message: IMessages): void {
    this.messages.push(message); 

    setTimeout(() => {
      const index = this.messages.indexOf(message); 

      if (index > -1) {
        this.closeMessage(index); 
      }
    }, 5000); 
  }

  public closeMessage(index: number): void {
    this.messages.splice(index, 1);  
  }
}
