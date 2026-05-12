import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../message.service';
import { LoaderService } from '../../loader.service';
import { IUser } from '../../interfaces/IUser';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-users-page',
  imports: [CommonModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {

  messageService: MessageService = inject(MessageService);
  loaderService: LoaderService = inject(LoaderService);
  userService: UserService = inject(UserService); 

  private usersSubject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  users$: Observable<IUser[]> = this.usersSubject.asObservable();

  setUsers(users: IUser[]): void {
    this.usersSubject.next(users);
  }

  getUsers(): Observable<IUser[]> {
    return this.users$;
  }

  constructor() {
    this.userService.loadUsers()
      .pipe(
        tap( (users: IUser[]) => this.userService.setUsers(users) )
      )
    .subscribe();
  }

}
