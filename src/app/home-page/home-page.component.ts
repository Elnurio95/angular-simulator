import { Component, inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { MessageService } from '../../message.service';
import { IBlog } from '../../interfaces/IBlog';
import { IPlace } from '../../interfaces/IPlace';
import { ITour } from '../../interfaces/ITour';
import { CommonModule } from '@angular/common';
import { IPicture } from '../../interfaces/Ipicture';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

  messageService: MessageService = inject(MessageService); 

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

  places: IPlace[] = [
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
          rateIcon: 'star-icon', 
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
          rateIcon: 'star-icon', 
          rate: 4.9
        }
      }
    ];

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
    ];

  pictures: string[] = ['balls', 'photographer-tools', 'burj-al-arab', 'pier', 'canyon', 'diary'];

  closeMessage(index: number): void {
    this.messageService.closeMessage(index);  
  }
     
}
