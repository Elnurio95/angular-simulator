import { Component } from '@angular/core';
import { Color } from '../enums/Color';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {

  companyName: string = 'румтибет';
  constructor() {
    this.setLastVisit();
    this.setQuantity();
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

}
