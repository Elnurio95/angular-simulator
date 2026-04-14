import { Component, inject } from '@angular/core';
import { Color } from '../enums/Color';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { MessageService } from '../message.service';
import { LocalStorageService } from '../local-storage.service';
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  providers: [MessageService, LocalStorageService]
})
export class AppComponent {
 
  private localStorageService: LocalStorageService = inject(LocalStorageService);

  isColor(color: Color): boolean {
    const mainArr: Color[] = [Color.BLUE, Color.RED, Color.GREEN];
    return mainArr.includes(color);
  }

  setLastVisit(): void {
    const currentDate: string = new Date().toISOString();
    this.localStorageService.setItem('last-date', currentDate);
  }

  setQuantity(): void {
    const USERS_KEY: string = 'users-key';
    const visits: number = (this.localStorageService.getItem<number>(USERS_KEY) || 0) + 1;

    this.localStorageService.setItem(USERS_KEY, visits);
  }

}
