import { inject, Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { BehaviorSubject, catchError, finalize, Observable, of, tap } from 'rxjs';
import { IUser } from './interfaces/IUser';
import { MessageService } from './message.service';
import { LoaderService } from './loader.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  userApiService: UserApiService = inject(UserApiService);
  messageService: MessageService = inject(MessageService);
  loaderService: LoaderService = inject(LoaderService);
  localStorageService: LocalStorageService = inject(LocalStorageService); 

  private usersSubject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  users$: Observable<IUser[]> = this.usersSubject.asObservable();

  setUsers(users: IUser[]): void {
    this.usersSubject.next(users);
  }

  loadUsers(): Observable<IUser[]> {
    this.loaderService.showLoader();

    const usersFromStorage: IUser[] | null = this.localStorageService.getItem<IUser[]>('users');
    if (usersFromStorage?.length) {
      this.loaderService.hideLoader();
      return of(usersFromStorage);
    };

    return this.userApiService.getUsers()
      .pipe(
        catchError((error: string) => {
          this.messageService.showError('Нет пользователей для отображения');
          console.error(error);
          return of([]);
        }),
        finalize(() => this.loaderService.hideLoader()),
      );
    }

}
