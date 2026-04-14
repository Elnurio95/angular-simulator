import { Component } from '@angular/core';
import { WidgetType } from '../../Types/WidgetType';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { INav } from '../../interfaces/INav';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  companyName: string = 'румтибет';
  tourLocation: string = ''; 
  tourDate: string = ''; 
  tourParticipant: string = '';
  widget: WidgetType = 'date'; 
  today: Date = new Date(); 
  liveInputValue: string = ''; 
  counter: number = 0; 
  isLoading: boolean = true; 
  count: boolean = false; 
  isDateActive: boolean = false;

  constructor() {
    setInterval(() => {
      this.today = new Date();
    }, 1000);
  
    setInterval(() => {
      this.isLoading = false; 
    }, 2000)
  }

  toggleWidget(widget: WidgetType): void {
    this.widget = widget; 
  }

  get isFormInvalid(): boolean {
    return !this.tourLocation || !this.tourDate || !this.tourParticipant;
  }
  
  navigation: INav[] = [
    {
      id: 1, 
      main: 'Главная', 
      users: 'Пользователи'
    }
  ]
  
}
