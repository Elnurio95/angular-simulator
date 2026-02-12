import { Component } from '@angular/core';
import { Colors } from '../enums/Colors';

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

  isColor(color: Colors): boolean {
    if (color === Colors.BLUE || color === Colors.RED || color === Colors.GREEN) {
      return true;
    }

    return false;
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
