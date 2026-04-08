import { Component, inject } from '@angular/core';
import { Color } from '../enums/Color';
import { ITour } from '../interfaces/ITour';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { WidgetType } from '../Types/WidgetType';
import { IPlaces } from '../interfaces/IPlaces';
import { IBlog } from '../interfaces/IBlog';
import { ManageMessageService } from '../manage-message.service';
import { Messages } from '../enums/Messages';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  providers: [ManageMessageService, LocalStorageService]
})
export class AppComponent {
 
  manageMessage: ManageMessageService = inject(ManageMessageService); 
  storageService: LocalStorageService = inject(LocalStorageService);

  companyName: string = 'румтибет';

  tourLocation: string = ''; 
  tourDate: string = ''; 
  tourParticipant: string = '';
  today: Date = new Date(); 
  liveInputValue: string = ''; 

  widget: WidgetType = 'date'; 
  
  
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

  closeMessage(index: number): void {
    this.manageMessage.closeMessage(index);  
  }

  showSuccess(): void {
    this.manageMessage.addMessage({
      id: 1,
      message: 'Направления получены', 
      type: Messages.Success
    })
  }

  showError(): void {
    this.manageMessage.addMessage({
      id: 2,
      message: 'Материалы недоступны', 
      type: Messages.Error
    })
  }

  showInfo(): void {
    this.manageMessage.addMessage({
      id: 3, 
      message: 'Стоимость отправлена на почту', 
      type: Messages.Info
    })
  }

  showWarn(): void {
    this.manageMessage.addMessage({
      id: 4, 
      message: 'Направления получены', 
      type: Messages.Warn
    })
  }

  toggleWidget(widget: WidgetType): void {
    this.widget = widget; 
  }

  get isFormInvalid(): boolean {
    return !this.tourLocation || !this.tourDate || !this.tourParticipant;
  }

  isColor(color: Color): boolean {
    const mainArr: Color[] = [Color.BLUE, Color.RED, Color.GREEN];
    return mainArr.includes(color);
  }

  setLastVisit(): void {
    const currentDate = new Date().toISOString();
    this.storageService.setItem('last-date', currentDate);
  }

  setQuantity(): void {
    const USERS_KEY: string = 'users-key';
    const visits = (this.storageService.getItem<number>(USERS_KEY) || 0) + 1;

    this.storageService.setItem(USERS_KEY, visits);
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

  places: IPlaces[] = [
    {
      id: 1, 
      img: 'lake-mountain', 
      tourName: 'Озеро возле гор', 
      tourSubtitle: 'романтическое приключение', 
      price: 480, 
      rates: {
        rateIcon: 'star-icon', 
        rate: 4.9
      }
    }, 
    {
      id: 2, 
      img: 'night-in-mountains', 
      tourName: 'Ночь в горах', 
      tourSubtitle: 'в компании друзей', 
      price: 500, 
      rates: {
        rateIcon: 'star', 
        rate: 4.9
      }
    }, 
    {
      id: 3, 
      img: 'stretching-in-mountains', 
      tourName: 'Растяжка в горах', 
      tourSubtitle: 'для тех, кто забоится о себе', 
      price: 230, 
      rates: {
        rateIcon: 'star', 
        rate: 4.9
      }
    }
  ]

  blogs: IBlog[] = [
    {
      id: 1, 
      blogImg: 'italian-city', 
      mainTitle: 'Красивая Италия, какая она в реальности?', 
      desc: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.', 
      date: '01/04/2023',
      link: 'читать статью'
    },
    {
      id: 2, 
      blogImg: 'airplane', 
      mainTitle: 'Долой сомнения! Весь мир открыт для вас!', 
      desc: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...', 
      date: '01/04/2023',
      link: 'читать статью'
    },
    {
      id: 3, 
      blogImg: 'travel-preparing', 
      mainTitle: 'Как подготовиться к путешествию в одиночку?', 
      desc: 'Для современного мира базовый вектор развития предполагает.', 
      date: '01/04/2023',
      link: 'читать статью'
    },
    {
      id: 4, 
      blogImg: 'indian-mosque', 
      mainTitle: 'Индия ... летим?', 
      desc: 'Для современного мира базовый.', 
      date: '01/04/2023',
      link: 'читать статью'
    }
  ]

}
