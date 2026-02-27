import { Component } from '@angular/core';
import { Color } from '../enums/Color';
import { ITour } from '../Interfaces/ITour';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor() {
    this.setLastVisit();
    this.setQuantity();
    this.removedInscription();
    this.increment(); 
    this.decrement(); 
    this.showTask(); 
    this.removeTask(); 

    setInterval(() => {
      this.today = new Date();
    }, 1000);

    setInterval(() => {
      this.isLoading = false; 
    }, 2000)
  }

  isLoading: boolean = true; 
  input: string = ''; 

  tasks: string = 'Задачи'; 
  count: boolean = false; 

  showTask() {
    return this.count = !this.count;  
  }

  removeTask() {
    return this.count = false; 
  }

  sum: number = 0; 

  increment(): number {   
    return this.sum++; 
  }

  decrement(): number {
    if (this.sum > 0) {
      return this.sum--; 
    } 

    return this.sum; 
  }

  removedInscription(): void {
    const dateInscription = document.querySelector('.date-inscription'); 
    dateInscription?.classList.add('removeLettering');
  }

  get isFormInvalid(): boolean {
    return !this.tourLocation || !this.tourDate || !this.tourParticipant;
  }

  animationIndex: number | null = null; 

  onMouseOver(index: number) {
    this.animationIndex = index; 
    const animation = document.querySelector('.tour__content'); 
    const tourTitle = document.querySelector('.tour-title'); 
    tourTitle?.classList.add('tour-title');
    animation?.classList.add('animation');
  }

  onMouseLeave() {
    this.animationIndex = null; 
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
