import { Component } from '@angular/core';
import { Color } from '../enums/Color';
import { ITour } from '../Interfaces/ITour';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { widgetType } from '../Types/WidgetType';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {

  companyName: string = 'румтибет';

  tourLocation: string = ''; 
  tourDate: string = ''; 
  tourParticipant: string = '';
  today: Date = new Date(); 
  liveInputValue: string = ''; 

  widget: widgetType = 'date'; 
  
  
  counter: number = 0; 

  isLoading: boolean = true; 
  count: boolean = false; 
  isDateActive: boolean = false;

  constructor() {
    this.setLastVisit();
    this.setQuantity(); 
    this.toggleWidget(this.widget);  

    setInterval(() => {
      this.today = new Date();
    }, 1000);

    setInterval(() => {
      this.isLoading = false; 
    }, 2000)
  }

  toggleWidget(widget: widgetType): void {
    this.widget = this.widget === 'date' ? 'counter' : 'date'; 
  }

  get isFormInvalid(): boolean {
    return !this.tourLocation || !this.tourDate || !this.tourParticipant;
  }

  isColor(color: Color): boolean {
    const mainArr: Color[] = [Color.BLUE, Color.RED, Color.GREEN];
    return mainArr.includes(color);
  }

  setLastVisit(): void {
    const currentDate: string = new Date().toISOString();
    localStorage.setItem('last-date', currentDate);
  }

  setQuantity(): void {
    const key: string = 'pageVisits';
    const visits: number = Number(localStorage.getItem(key) || '0') + 1;
    localStorage.setItem(key, String(visits));
  }

  tours: ITour[] = [  
    {
      id: 1,
      image: 'guide-trip-icon',
      title: 'Опытный гид',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 2,
      image: 'safety-icon',
      title: 'Безопасный поход',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 3,
      image: 'loyality-icon',
      title: 'Лояльные цены',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
  ];

}
