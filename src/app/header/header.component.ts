import { Component } from '@angular/core';
import { WidgetType } from '../../Types/WidgetType';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { INavigation } from '../../interfaces/INavigation';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  companyName: string = 'румтибет';
  widget: WidgetType = 'date';
  today: Date = new Date();
  counter: number = 0;
  isLoading: boolean = true;
  count: boolean = false;

  constructor() {
    setInterval(() => {
      this.today = new Date();
    }, 1000);

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  toggleWidget(widget: WidgetType): void {
    this.widget = widget;
  }

  navigation: INavigation[] = [
    { path: '/', label: 'Главная' }, 
    { path: '/users', label: 'Пользователи' }, 
  ]
  
}
