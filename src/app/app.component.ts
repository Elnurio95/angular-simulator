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
    this.getEntries();
  }

  isColor(color: Color): boolean {
    const mainArr: Color[] = [Color.BLUE, Color.RED, Color.GREEN];
    return mainArr.includes(color);
  }

  setLastVisit(): void {
    const currenttDate = new Date().toISOString();
    localStorage.setItem('last-date', currenttDate);
  }

  getEntries(): void {
    const key = 'pageVisits';
    const visits = Number(localStorage.getItem(key) || '0') + 1;
    localStorage.setItem(key, String(visits));
  }
}
